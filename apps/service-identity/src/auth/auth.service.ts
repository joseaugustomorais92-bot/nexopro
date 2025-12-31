import { Injectable, UnauthorizedException, ConflictException, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { User } from '../users/user.entity';
import { Tenant } from '../tenants/tenant.entity';
import { CompanyType, UserRole } from '@nexopro/shared-types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Tenant)
    private tenantsRepository: Repository<Tenant>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private jwtService: JwtService,
    private dataSource: DataSource,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    // Try to get user from cache to avoid DB hit
    const cacheKey = `user_email_${email}`;
    let user: User | undefined = await this.cacheManager.get(cacheKey);

    if (!user) {
      user = await this.usersRepository.findOne({ where: { email }, relations: ['tenant'] });
      if (user) {
        // Cache user for 5 minutes (TTL in seconds or milliseconds depending on store, default is often ms in v5, s in v4/Nest)
        // NestJS Cache Manager default TTL is usually milliseconds in v5, but check config.
        // We set global TTL to 600 (seconds) in app.module, but here we can override.
        await this.cacheManager.set(cacheKey, user);
      }
    }

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { 
      email: user.email, 
      sub: user.id,
      role: user.role,
      tenantId: user.tenant?.id,
      name: user.name,
      tenantName: user.tenant?.name
    };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        tenant: user.tenant
      }
    };
  }

  async registerTenant(data: {
    adminName: string;
    adminEmail: string;
    adminPassword: string;
    companyName: string;
    companyType: CompanyType;
    companyRegion?: string;
  }) {
    // Check if user exists
    const existingUser = await this.usersRepository.findOne({ where: { email: data.adminEmail } });
    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    // Transactional creation
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // 1. Create Tenant
      const tenant = new Tenant();
      tenant.name = data.companyName;
      tenant.type = data.companyType;
      tenant.region = data.companyRegion;
      tenant.isActive = true;
      const savedTenant = await queryRunner.manager.save(tenant);

      // 2. Create Admin User
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(data.adminPassword, salt);

      const user = new User();
      user.name = data.adminName;
      user.email = data.adminEmail;
      user.password = hashedPassword;
      user.role = UserRole.COMPANY_OWNER; // First user is always the Owner
      user.tenant = savedTenant;

      const savedUser = await queryRunner.manager.save(user);

      await queryRunner.commitTransaction();

      // Invalidate cache if exists (unlikely for new user, but good practice)
      await this.cacheManager.del(`user_email_${data.adminEmail}`);

      // Login automatically
      return this.login({ ...savedUser, tenant: savedTenant });

    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
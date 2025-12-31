import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { User } from './users/user.entity';
import { Tenant } from './tenants/tenant.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379'),
      ttl: 600, // 10 minutes cache
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER || 'admin',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'nexopro_core',
      entities: [User, Tenant],
      synchronize: true,
      extra: {
        max: 50, // Increase pool size for high concurrency
        connectionTimeoutMillis: 5000,
        idleTimeoutMillis: 30000,
      },
    }),
    TypeOrmModule.forFeature([User, Tenant]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
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
      url: process.env.REDIS_URL, // Support for Railway REDIS_URL
      host: process.env.REDIS_URL ? undefined : (process.env.REDIS_HOST || 'localhost'),
      port: process.env.REDIS_URL ? undefined : parseInt(process.env.REDIS_PORT || '6379'),
      ttl: 600, // 10 minutes cache
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Support for Railway DATABASE_URL
      host: process.env.DATABASE_URL ? undefined : (process.env.DB_HOST || 'localhost'),
      port: process.env.DATABASE_URL ? undefined : parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DATABASE_URL ? undefined : (process.env.DB_USER || 'admin'),
      password: process.env.DATABASE_URL ? undefined : (process.env.DB_PASSWORD || 'password'),
      database: process.env.DATABASE_URL ? undefined : (process.env.DB_NAME || 'nexopro_core'),
      entities: [User, Tenant],
      synchronize: true, // Auto-create tables (Disable in production if using migrations)
      extra: {
        max: 50,
        connectionTimeoutMillis: 5000,
        idleTimeoutMillis: 30000,
      },
      ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false, // Enable SSL for Railway
    }),
    TypeOrmModule.forFeature([User, Tenant]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 1000, // 1000 requests per minute per IP (High limit for enterprise)
    }]),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        createProxyMiddleware({
          target: process.env.IDENTITY_SERVICE_URL || 'http://localhost:3001',
          changeOrigin: true,
          pathRewrite: {
            '^/api/identity': '/api/v1/identity',
          },
        }),
      )
      .forRoutes({ path: 'api/identity*', method: RequestMethod.ALL });
  }
}
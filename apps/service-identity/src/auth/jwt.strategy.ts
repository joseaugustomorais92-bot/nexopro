import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'superSecretKey',
    });
  }

  async validate(payload: any) {
    // Returns the user object attached to the Request object
    // Critical for Tenant Isolation and RBAC
    return { 
      userId: payload.sub, 
      email: payload.email, 
      role: payload.role, 
      tenantId: payload.tenantId 
    };
  }
}
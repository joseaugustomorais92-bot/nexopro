import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CompanyType } from '@nexopro/shared-types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() req) {
    const user = await this.authService.validateUser(req.email, req.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }

  @Post('register-tenant')
  async registerTenant(@Body() body: {
    adminName: string;
    adminEmail: string;
    adminPassword: string;
    companyName: string;
    companyType: CompanyType;
    companyRegion?: string;
  }) {
    return this.authService.registerTenant(body);
  }
}

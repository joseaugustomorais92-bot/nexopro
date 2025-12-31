import { Controller, Request, Post, Get, UseGuards, Body, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Request() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Request() req, @Res() res) {
    const user = await this.authService.validateGoogleUser(req.user);
    const loginData = await this.authService.login(user);
    
    // Redirect to frontend with token
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3002';
    // Use a secure way to pass token, e.g., URL param (simple) or set cookie (better but CORS issues)
    // For simplicity and to work with the requested flow:
    res.redirect(`${frontendUrl}/auth/callback?token=${loginData.access_token}&user=${encodeURIComponent(JSON.stringify(loginData.user))}`);
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

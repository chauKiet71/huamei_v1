import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: any) {
    const fullName = String(body.fullName || body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    return this.authService.register(fullName, email, password);
  }

  @Post('login')
  async login(@Body() body: any) {
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    return this.authService.login(email, password);
  }
}

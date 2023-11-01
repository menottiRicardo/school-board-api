import { Controller, Post, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req, @Res({ passthrough: true }) res) {
    const token = await this.authService.login(req.user);
    console.log('roken', token);

    res.cookie('access_token', token.access_token, {
      expires: new Date(Date.now() + 10800000),
    });
    return token;
  }
}

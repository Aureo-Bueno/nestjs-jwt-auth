import { Body, Controller, Ip, Req } from '@nestjs/common';
import { request } from 'http';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import RefreshTokenDto from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Req request, @Ip() ip: string, @Body() body: LoginDto) {
    return this.authService.login(body.email, body.password, values: {
      ipAddress: ip,
      userAgent: request.headers['user-agent'],
    });
  }

  @Post('refresh')
  async refreshToken(@Body() body: RefreshTokenDto) {
    return this.authService.refresh(body.refreshToken);

  }

  @Delete('logout')
  async logout(@Body() body: RefreshTokenDto) {
    return this.authService.logout(body.refreshToken);
  }
}

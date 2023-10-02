import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { SignInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: SignInDto) {
    return this.authService.signin(dto);
  }

  @Get()
  async redirectToAuth(@Req() res, @Req() req) {
    try {
      const requestToken = await this.authService.getRequestToken();
      const url = `https://www.themoviedb.org/authenticate/${requestToken.request_token}`;
      return res.redirect(url);
    } catch (error) {
      console.log(error);
    }
  }
}

import { AuthService } from './auth.service';
import { Body, Controller, Get,  Post, } from '@nestjs/common';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  getCurrentCat(@Body() body) {
    return this.authService.login();
  }
  
  @Post('register')
  async signUp(@Body() body) {
    return this.authService.register();
  }
  
  @Post('/logout')
  logOut() {
    return this.authService.logout();
  }
}

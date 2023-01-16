import { UserRepository } from 'src/user/user.repository';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ) { }
  
  login() {
    return "login";
  }

  register() {
    return "register";
  }

  logout() {
    return "logout";
  }
}

import { Body, Controller, Get, Post } from "@nestjs/common";
import { signUpRequestDto } from "./dto/signUp.request.dto";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }
  /**
   *  로그인
   */
  @Post('/login')
  logIn() {

  }

  /**
   *  회원가입
   */
  @Post('/signup')
  async signUp(@Body() body: signUpRequestDto) {
    return await this.userService.signUp(body);
  }
  
  /**
   *  유저 정보 가져오기
   */
  @Get('/user')
  getUser() {
    
  }
}
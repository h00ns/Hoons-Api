import { Injectable } from "@nestjs/common";
import { signUpRequestDto } from "./dto/signUp.request.dto";

@Injectable()
export class UserService {
  async signUp(body: signUpRequestDto) {
    const { email, password, name } = body;



  }
}
import { forwardRef, Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

@Module({
  imports: [
    forwardRef(() => AuthModule)
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
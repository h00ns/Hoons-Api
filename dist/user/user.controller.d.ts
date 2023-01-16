import { signUpRequestDto } from "./dto/user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    logIn(): void;
    signUp(body: signUpRequestDto): Promise<void>;
    getUser(): void;
}

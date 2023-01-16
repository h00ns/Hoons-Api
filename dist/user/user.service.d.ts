import { signUpRequestDto } from "./dto/user.dto";
export declare class UserService {
    signUp(body: signUpRequestDto): Promise<void>;
}

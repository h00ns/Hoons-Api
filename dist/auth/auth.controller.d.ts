import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getCurrentCat(body: any): string;
    signUp(body: any): Promise<string>;
    logOut(): string;
}

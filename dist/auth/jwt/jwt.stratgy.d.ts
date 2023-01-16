import { Strategy } from 'passport-jwt';
import { Payload } from './jwt.payload';
import { UserRepository } from 'src/user/user.repository';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: Payload): Promise<void>;
}
export {};

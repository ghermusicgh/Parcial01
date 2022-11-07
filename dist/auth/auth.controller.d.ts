import { AuthService } from './auth.service';
import { Request } from 'express';
import { User } from '../users/entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: Request): {
        access_token: string;
        user: User;
    };
}

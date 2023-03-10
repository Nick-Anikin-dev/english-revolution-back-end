import { CreateUserDto } from '../user/dtos/create-user.dto';
import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { SignInDto } from './dto/sign-in.dto';
import { Request } from 'express';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    auth(req: Request): Promise<User>;
    signIn(signInDto: SignInDto): Promise<{
        user: {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            username: string;
            role_type: import("../constants/roles/roles.enum").RolesEnum;
            user_role_id: number;
        };
        token: string;
    }>;
    private validateUser;
    signUp(userDto: CreateUserDto): Promise<{
        user: {
            user_role_id: number;
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            username: string;
            role_type: import("../constants/roles/roles.enum").RolesEnum;
        };
        token: string;
    }>;
    private generateToken;
}

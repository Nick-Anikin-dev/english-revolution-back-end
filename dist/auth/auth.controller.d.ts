import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/sign-in.dto";
import { SignUpDto } from "./dto/sign-up.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
    signUp(signUpDto: SignUpDto): Promise<{
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
}

import { UsersService } from "./user.service";
import { AuthUser } from "../auth/interfaces/auth-user.interface";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<{
        user_role: any;
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        username: string;
        role_type: import("../constants/roles/roles.enum").RolesEnum;
        user_role_id: number;
    }[]>;
    getUserDetails(user: AuthUser): Promise<import("../teacher/teacher.entity").Teacher | import("../student/student.entity").Student | import("../school/s\u0441hool.entity").School>;
}

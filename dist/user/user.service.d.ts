import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { Repository } from 'typeorm';
import { RolesEnum } from '../constants/roles/roles.enum';
import { SchoolService } from '../school/school.service';
import { TeacherService } from '../teacher/teacher.service';
import { StudentService } from '../student/student.service';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
export declare class UsersService {
    private userRepository;
    private readonly studentService;
    private readonly teacherService;
    private readonly schoolService;
    constructor(userRepository: Repository<User>, studentService: StudentService, teacherService: TeacherService, schoolService: SchoolService);
    getAllUsers(): Promise<{
        user_role: any;
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        username: string;
        role_type: RolesEnum;
        user_role_id: number;
    }[]>;
    getUserById(id: any): Promise<User>;
    getUserRoleDetails(user: AuthUser): Promise<import("../student/student.entity").Student | import("../teacher/teacher.entity").Teacher | import("../school/s\u0441hool.entity").School>;
    createUser(dto: CreateUserDto): Promise<{
        user_role_id: number;
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        username: string;
        role_type: RolesEnum;
    }>;
    private createUserRole;
    getUserByEmail(email: string): Promise<User>;
}

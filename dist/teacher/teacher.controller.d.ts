import { TeacherService } from "./teacher.service";
import { AuthUser } from '../auth/interfaces/auth-user.interface';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    getTeacher(user: AuthUser): Promise<import("./teacher.entity").Teacher[]>;
    findTeachersByUsername(username: string): Promise<import("../user/user.entity").User[]>;
    getTeacherByUserId(id: number): Promise<import("./teacher.entity").Teacher>;
}

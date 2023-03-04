import { StudentService } from "./student.service";
import { AuthUser } from '../auth/interfaces/auth-user.interface';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudents(user: AuthUser): Promise<import("./student.entity").Student[]>;
    findStudentsByUsername(user: AuthUser, username: string): Promise<import("../user/user.entity").User[]>;
    getStudentByUserId(id: number): Promise<import("./student.entity").Student>;
}

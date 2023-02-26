import { StudentService } from "./student.service";
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudentByUserId(id: number): Promise<import("./student.entity").Student>;
    findStudentsByUsername(username: string): Promise<import("../user/user.entity").User[]>;
}

import { TeacherService } from "./teacher.service";
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    findTeachersByUsername(username: string): Promise<import("../user/user.entity").User[]>;
    getTeacherByUserId(id: number): Promise<import("./teacher.entity").Teacher>;
}

import { TeacherService } from "./teacher.service";
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    getTeacherByUserId(id: number): Promise<import("./teacher.entity").Teacher>;
}

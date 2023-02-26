import { Repository } from "typeorm";
import { Teacher } from "./teacher.entity";
export declare class TeacherService {
    private readonly teacherRepository;
    constructor(teacherRepository: Repository<Teacher>);
    createTeacher(user_id: number): Promise<Teacher>;
    getTeacherByUserId(user_id: number): Promise<Teacher>;
}

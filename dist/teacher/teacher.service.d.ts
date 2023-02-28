import { Repository } from 'typeorm';
import { Teacher } from "./teacher.entity";
import { User } from '../user/user.entity';
export declare class TeacherService {
    private readonly teacherRepository;
    private readonly userRepository;
    constructor(teacherRepository: Repository<Teacher>, userRepository: Repository<User>);
    createTeacher(user_id: number): Promise<Teacher>;
    getTeacherById(id: number): Promise<Teacher>;
    getTeacherByUserId(user_id: number): Promise<Teacher>;
    findTeachersByUsername(username: string): Promise<User[]>;
}

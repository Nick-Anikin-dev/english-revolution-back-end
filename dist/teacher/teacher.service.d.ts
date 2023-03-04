import { Repository } from 'typeorm';
import { Teacher } from "./teacher.entity";
import { User } from '../user/user.entity';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { School } from '../school/sсhool.entity';
export declare class TeacherService {
    private readonly teacherRepository;
    private readonly schoolsRepository;
    private readonly userRepository;
    constructor(teacherRepository: Repository<Teacher>, schoolsRepository: Repository<School>, userRepository: Repository<User>);
    getTeachers(user: AuthUser): Promise<Teacher[]>;
    createTeacher(user_id: number): Promise<Teacher>;
    getTeacherById(id: number): Promise<Teacher>;
    getTeacherByUserId(user_id: number): Promise<Teacher>;
    findTeachersByUsername(username: string): Promise<User[]>;
}

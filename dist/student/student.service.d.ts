import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { User } from '../user/user.entity';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
export declare class StudentService {
    private readonly studentRepository;
    private readonly userRepository;
    constructor(studentRepository: Repository<Student>, userRepository: Repository<User>);
    createStudent(user_id: number): Promise<Student>;
    getStudentByUserId(user_id: number): Promise<Student>;
    getStudentByIds(student_ids: number[]): Promise<Student[]>;
    findStudentsByUsername(user: AuthUser, username: string): Promise<User[]>;
}

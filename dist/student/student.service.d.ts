import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { User } from '../user/user.entity';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { Teacher } from '../teacher/teacher.entity';
import { School } from '../school/sсhool.entity';
export declare class StudentService {
    private readonly studentRepository;
    private readonly teacherRepository;
    private readonly schoolRepository;
    private readonly userRepository;
    constructor(studentRepository: Repository<Student>, teacherRepository: Repository<Teacher>, schoolRepository: Repository<School>, userRepository: Repository<User>);
    getStudents(user: AuthUser): Promise<Student[]>;
    getStudentById(id: number): Promise<Student>;
    a(): Promise<import("typeorm").UpdateResult>;
    createStudent(user_id: number): Promise<Student>;
    getStudentByUserId(user_id: number): Promise<Student>;
    getStudentByIds(student_ids: number[]): Promise<Student[]>;
    findStudentsByUsername(user: AuthUser, username: string): Promise<User[]>;
}

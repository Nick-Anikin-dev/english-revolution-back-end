import { Repository } from "typeorm";
import { Student } from "./student.entity";
import { User } from "../user/user.entity";
export declare class StudentService {
    private readonly studentRepository;
    private readonly userRepository;
    constructor(studentRepository: Repository<Student>, userRepository: Repository<User>);
    createStudent(user_id: number): Promise<Student>;
    getStudentByUserId(user_id: number): Promise<Student>;
    findStudentsByUsername(username: string): Promise<User[]>;
}

import { CreateGroup } from './dtos/create-group.dto';
import { AddStudents } from './dtos/add-students.dto';
import { Group } from './group.entity';
import { Repository } from 'typeorm';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { User } from '../user/user.entity';
import { UsersService } from '../user/user.service';
import { StudentService } from '../student/student.service';
import { Teacher } from '../teacher/teacher.entity';
export declare class GroupService {
    private readonly groupRepository;
    private readonly userRepository;
    private readonly teacherRepository;
    private readonly usersService;
    private readonly studentService;
    constructor(groupRepository: Repository<Group>, userRepository: Repository<User>, teacherRepository: Repository<Teacher>, usersService: UsersService, studentService: StudentService);
    getGroups(user: AuthUser): Promise<Group[]>;
    getGroupDetails(user: AuthUser, id: number): Promise<Group[]>;
    getTeacherGroupDetails(user: AuthUser, id: number): Promise<Group[]>;
    createGroup(user: AuthUser, createGroup: CreateGroup): Promise<{
        school: import("../student/student.entity").Student | Teacher | import("../school/s\u0441hool.entity").School;
        id: number;
        name: string;
        teacher: Teacher;
        lessons: import("../lesson/lesson.entity").Lesson[];
        students: import("../student/student.entity").Student[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    } & Group>;
    addStudents(id: number, user: AuthUser, addStudents: AddStudents): Promise<{
        students: import("../student/student.entity").Student[];
        id: number;
        name: string;
        school: import("../school/s\u0441hool.entity").School;
        teacher: Teacher;
        lessons: import("../lesson/lesson.entity").Lesson[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    } & Group>;
    addStudent(id: number, user: AuthUser, student_id: number): Promise<{
        students: import("../student/student.entity").Student[];
        id: number;
        name: string;
        school: import("../school/s\u0441hool.entity").School;
        teacher: Teacher;
        lessons: import("../lesson/lesson.entity").Lesson[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    } & Group>;
    deleteStudent(id: number, user: AuthUser, student_id: number): Promise<{
        students: import("../student/student.entity").Student[];
        id: number;
        name: string;
        school: import("../school/s\u0441hool.entity").School;
        teacher: Teacher;
        lessons: import("../lesson/lesson.entity").Lesson[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    } & Group>;
    assignTeacher(id: number, user: AuthUser, teacher_id: number): Promise<void>;
    deleteGroup(user: AuthUser, id: number): Promise<void>;
}

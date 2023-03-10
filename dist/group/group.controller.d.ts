import { GroupService } from './group.service';
import { CreateGroup } from './dtos/create-group.dto';
import { AddStudents } from './dtos/add-students.dto';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    getGroups(user: AuthUser): Promise<import("./group.entity").Group[]>;
    getGroupDetails(user: AuthUser, id: number): Promise<import("./group.entity").Group[]>;
    getTeacherGroupDetails(user: AuthUser, id: number): Promise<import("./group.entity").Group[]>;
    createGroup(user: AuthUser, createGroup: CreateGroup): Promise<{
        school: import("../student/student.entity").Student | import("../teacher/teacher.entity").Teacher | import("../school/s\u0441hool.entity").School;
        id: number;
        name: string;
        teacher: import("../teacher/teacher.entity").Teacher;
        lessons: import("../lesson/lesson.entity").Lesson[];
        students: import("../student/student.entity").Student[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    } & import("./group.entity").Group>;
    addStudent(user: AuthUser, id: number, student_id: number): Promise<{
        students: import("../student/student.entity").Student[];
        id: number;
        name: string;
        school: import("../school/s\u0441hool.entity").School;
        teacher: import("../teacher/teacher.entity").Teacher;
        lessons: import("../lesson/lesson.entity").Lesson[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    } & import("./group.entity").Group>;
    addStudents(user: AuthUser, id: number, addStudents: AddStudents): Promise<{
        students: import("../student/student.entity").Student[];
        id: number;
        name: string;
        school: import("../school/s\u0441hool.entity").School;
        teacher: import("../teacher/teacher.entity").Teacher;
        lessons: import("../lesson/lesson.entity").Lesson[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    } & import("./group.entity").Group>;
    deleteStudent(user: AuthUser, id: number, student_id: number): Promise<{
        students: import("../student/student.entity").Student[];
        id: number;
        name: string;
        school: import("../school/s\u0441hool.entity").School;
        teacher: import("../teacher/teacher.entity").Teacher;
        lessons: import("../lesson/lesson.entity").Lesson[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    } & import("./group.entity").Group>;
    deleteGroup(user: AuthUser, id: number): Promise<void>;
    assignTeacher(user: AuthUser, id: number, teacher_id: number): Promise<void>;
}

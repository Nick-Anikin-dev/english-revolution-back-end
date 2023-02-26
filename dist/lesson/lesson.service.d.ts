import { Lesson } from "./lesson.entity";
import { Repository } from "typeorm";
import { AuthUser } from "../auth/interfaces/auth-user.interface";
import { CreateLessonDto } from "./dtos/create-lesson.dto";
import { Student } from "../student/student.entity";
import { Teacher } from "../teacher/teacher.entity";
import { UpdateLessonDto } from "./dtos/update-lesson.dto";
export declare class LessonService {
    private readonly lessonRepository;
    private readonly studentRepository;
    private readonly teacherRepository;
    constructor(lessonRepository: Repository<Lesson>, studentRepository: Repository<Student>, teacherRepository: Repository<Teacher>);
    getLessonDetails(user: AuthUser, id: number): Promise<Lesson>;
    createLesson(user: AuthUser, createLessonDto: CreateLessonDto): Promise<Lesson>;
    updateLesson(user: AuthUser, id: number, updateLessonDto: UpdateLessonDto): Promise<import("typeorm").UpdateResult>;
    deleteLesson(user: AuthUser, id: number): Promise<import("typeorm").UpdateResult>;
}

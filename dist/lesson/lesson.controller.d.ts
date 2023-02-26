import { LessonService } from "./lesson.service";
import { CreateLessonDto } from "./dtos/create-lesson.dto";
import { AuthUser } from "../auth/interfaces/auth-user.interface";
import { UpdateLessonDto } from "./dtos/update-lesson.dto";
export declare class LessonController {
    private readonly lessonService;
    constructor(lessonService: LessonService);
    getLessonDetails(user: AuthUser, id: number): Promise<import("./lesson.entity").Lesson>;
    updateLesson(user: AuthUser, id: number, updateLessonDto: UpdateLessonDto): Promise<import("typeorm").UpdateResult>;
    createLesson(user: AuthUser, createLessonDto: CreateLessonDto): Promise<import("./lesson.entity").Lesson>;
    deleteLesson(user: AuthUser, id: number): Promise<import("typeorm").UpdateResult>;
}

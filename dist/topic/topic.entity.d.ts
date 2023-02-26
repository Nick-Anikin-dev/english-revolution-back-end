import { Teacher } from "../teacher/teacher.entity";
import { Lesson } from "../lesson/lesson.entity";
import { File } from "../files/interfaces/file.interface";
export declare class Topic {
    id: number;
    user_id: number;
    teacher: Teacher;
    lessons: Lesson[];
    title: string;
    description: string;
    files: File[];
    created_at: Date;
}

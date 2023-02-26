import { Lesson } from "../lesson/lesson.entity";
import { File } from "../files/interfaces/file.interface";
export declare class Homework {
    id: number;
    lesson: Lesson;
    description: string;
    files: File[] | null;
    review: File | null;
    fixes: File | null;
    mark: string;
    created_at: Date;
    updated_at: Date;
}

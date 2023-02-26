import { School } from "../school/sсhool.entity";
import { Teacher } from "../teacher/teacher.entity";
import { Student } from "../student/student.entity";
import { Lesson } from "../lesson/lesson.entity";
export declare class Group {
    id: number;
    school: School;
    teacher: Teacher;
    lessons: Lesson[];
    students: Student[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}

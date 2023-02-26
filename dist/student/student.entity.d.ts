import { Teacher } from "../teacher/teacher.entity";
import { School } from "../school/sсhool.entity";
import { Group } from "../group/group.entity";
import { Lesson } from "../lesson/lesson.entity";
export declare class Student {
    id: number;
    user_id: number;
    teacher: Teacher;
    school: School;
    group: Group;
    lessons: Lesson[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

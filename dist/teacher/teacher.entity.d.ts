import { School } from "../school/sсhool.entity";
import { Student } from "../student/student.entity";
import { Topic } from "../topic/topic.entity";
import { Group } from "../group/group.entity";
import { Lesson } from "../lesson/lesson.entity";
export declare class Teacher {
    id: number;
    user_id: number;
    students: Student[];
    groups: Group[];
    topics: Topic[];
    school: School;
    lessons: Lesson[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

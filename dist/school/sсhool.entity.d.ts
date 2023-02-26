import { Teacher } from "../teacher/teacher.entity";
import { Student } from "../student/student.entity";
import { Group } from "../group/group.entity";
export declare class School {
    id: number;
    user_id: number;
    name: string;
    groups: Group[];
    students: Student[];
    teachers: Teacher[];
    created_at: Date;
}

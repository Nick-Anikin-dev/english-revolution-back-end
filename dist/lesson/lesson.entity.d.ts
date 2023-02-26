import { Topic } from "../topic/topic.entity";
import { Student } from "../student/student.entity";
import { Teacher } from "../teacher/teacher.entity";
import { Homework } from "../homework/homework.entity";
import { File } from "../files/interfaces/file.interface";
import { Group } from "../group/group.entity";
export declare class Lesson {
    id: number;
    topic: Topic;
    student: Student;
    group: Group;
    teacher: Teacher;
    title: string;
    homework?: Homework;
    files: File[];
    date_from: Date;
    date_to: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

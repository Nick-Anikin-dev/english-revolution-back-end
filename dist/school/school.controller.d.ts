import { SchoolService } from './school.service';
import { AssignTeacherToStudents } from './dtos/assign-teacher-to-students.dto';
export declare class SchoolController {
    private readonly schoolService;
    constructor(schoolService: SchoolService);
    getSchoolByUserId(id: number): Promise<import("./s\u0441hool.entity").School>;
    assignTeacherToStudents(assignTeacherToStudents: AssignTeacherToStudents): Promise<{
        students: import("../student/student.entity").Student[];
        id: number;
        user_id: number;
        groups: import("../group/group.entity").Group[];
        topics: import("../topic/topic.entity").Topic[];
        school: import("./s\u0441hool.entity").School;
        lessons: import("../lesson/lesson.entity").Lesson[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    } & import("../teacher/teacher.entity").Teacher>;
}

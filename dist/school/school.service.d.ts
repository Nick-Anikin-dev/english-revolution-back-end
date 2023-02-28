import { Repository } from 'typeorm';
import { School } from './sсhool.entity';
import { AssignTeacherToStudents } from './dtos/assign-teacher-to-students.dto';
import { TeacherService } from '../teacher/teacher.service';
import { StudentService } from '../student/student.service';
import { Teacher } from '../teacher/teacher.entity';
export declare class SchoolService {
    private readonly schoolRepository;
    private readonly teacherRepository;
    private readonly studentService;
    private readonly teacherService;
    constructor(schoolRepository: Repository<School>, teacherRepository: Repository<Teacher>, studentService: StudentService, teacherService: TeacherService);
    createSchool(user_id: number): Promise<School>;
    getSchoolByUserId(user_id: number): Promise<School>;
    assignTeacherToStudents(assignTeacherToStudents: AssignTeacherToStudents): Promise<{
        students: import("../student/student.entity").Student[];
        id: number;
        user_id: number;
        groups: import("../group/group.entity").Group[];
        topics: import("../topic/topic.entity").Topic[];
        school: School;
        lessons: import("../lesson/lesson.entity").Lesson[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    } & Teacher>;
}

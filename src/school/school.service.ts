import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { School } from './sсhool.entity';
import { AssignTeacherToStudents } from './dtos/assign-teacher-to-students.dto';
import { TeacherService } from '../teacher/teacher.service';
import { StudentService } from '../student/student.service';
import { Teacher } from '../teacher/teacher.entity';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>,
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
    private readonly studentService: StudentService,
    private readonly teacherService: TeacherService,
  ) {
  }

  async createSchool(user_id: number) {
    const new_school = this.schoolRepository.create({ user_id });
    return await this.schoolRepository.save(new_school);
  }

  async getSchoolByUserId(user_id: number) {
    return await this.schoolRepository.findOne({ where: { user_id } });
  }

  async assignTeacherToStudents(assignTeacherToStudents: AssignTeacherToStudents) {
    const { teacher_id, student_ids } = assignTeacherToStudents;
    const teacher = await this.teacherService.getTeacherById(teacher_id);
    if (!teacher) {
      throw new NotFoundException(`Failed to find teacher with id: ${teacher_id}`);
    }
    const students = await this.studentService.getStudentByIds(student_ids);
    return await this.teacherRepository.save({
      ...teacher,
      students,
    });
  }
}

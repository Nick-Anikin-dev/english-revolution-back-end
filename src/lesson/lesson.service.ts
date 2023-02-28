import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Lesson } from "./lesson.entity";
import { Repository } from "typeorm";
import { AuthUser } from "../auth/interfaces/auth-user.interface";
import { CreateLessonDto } from "./dtos/create-lesson.dto";
import { Student } from "../student/student.entity";
import { Teacher } from "../teacher/teacher.entity";
import { UpdateLessonDto } from "./dtos/update-lesson.dto";
import { RolesEnum } from "../constants/roles/roles.enum";

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private readonly lessonRepository: Repository<Lesson>,
    @InjectRepository(Student) private readonly studentRepository: Repository<Student>,
    @InjectRepository(Teacher) private readonly teacherRepository: Repository<Teacher>
  ) {
  }

  async getLessonDetails(user: AuthUser, id: number) {
    const lesson = await this.lessonRepository.findOne({ where: { id }, relations: ['teacher', 'student'] });
    if (!lesson) {
      throw new NotFoundException(`Failed to find lesson with id: ${id}`);
    }

    switch (user.role){
      case RolesEnum.STUDENT:
        if (lesson.student.user_id !== user.id) {
          throw new ForbiddenException(`Failed to get lesson details`);
        }
        break;
      case RolesEnum.TEACHER:
        if (lesson.teacher.user_id !== user.id) {
          throw new ForbiddenException(`Failed to get lesson details`);
        }
        break;
    }
    return lesson;
  }

  async createLesson(user: AuthUser, createLessonDto: CreateLessonDto) {
    const { student_id, ...partial } = createLessonDto;
    const student = await this.studentRepository.findOne({ where: { id: student_id } });
    if (!student) {
      throw new NotFoundException(`Failed to find student with id: ${student_id}`);
    }
    const teacher = await this.teacherRepository.findOne({ where: { user_id: user.id } });
    if (!teacher) {
      throw new ForbiddenException(`Failed to create lesson`);
    }
    const new_lesson = this.lessonRepository.create({ ...partial, student, teacher });
    return await this.lessonRepository.save(new_lesson);
  }

  async updateLesson(user: AuthUser, id: number, updateLessonDto: UpdateLessonDto) {
    const lesson = await this.lessonRepository.findOne({ where: { id }, relations: [ "teacher" ] });
    if (!lesson) {
      throw new NotFoundException(`Failed to find lesson with id: ${id}`);
    }
    if (lesson.teacher.user_id !== user.id) {
      throw new ForbiddenException(`Failed to update lesson`);
    }

    const { student_id, ...partial } = updateLessonDto;

    if (student_id) {
      const student = await this.studentRepository.findOne({ where: { id: student_id } });
      if (!student) {
        throw new NotFoundException(`Failed to find student with id: ${student_id}`);
      }
      return await this.lessonRepository.update({id},{ ...partial, student });
    }

    return await this.lessonRepository.update({id}, partial);
  }

  async deleteLesson(user: AuthUser, id: number) {
    const lesson = await this.lessonRepository.findOne({ where: { id }, relations: [ "teacher" ] });
    if (!lesson) {
      throw new NotFoundException(`Failed to find lesson with id: ${id}`);
    }
    if (lesson.teacher.user_id !== user.id) {
      throw new ForbiddenException(`Failed to remove lesson`);
    }
    return await this.lessonRepository.softDelete({ id });
  }
}

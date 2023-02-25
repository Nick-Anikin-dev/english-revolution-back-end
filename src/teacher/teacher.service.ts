import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Teacher } from "./teacher.entity";

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>) {
  }

  async createTeacher(user_id: number) {
    const new_teacher = this.teacherRepository.create({ user_id });
    return await this.teacherRepository.save(new_teacher);
  }

  async getTeacherByUserId(user_id: number) {
    return await this.teacherRepository.findOne({ where: { user_id } });
  }
}

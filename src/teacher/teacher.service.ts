import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from 'typeorm';
import { Teacher } from "./teacher.entity";
import { RolesEnum } from '../constants/roles/roles.enum';
import { User } from '../user/user.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {
  }

  async createTeacher(user_id: number) {
    const new_teacher = this.teacherRepository.create({ user_id });
    return await this.teacherRepository.save(new_teacher);
  }

  async getTeacherById(id: number){
    const teacher = await this.teacherRepository.findOne({ where: { id } });
    if(!teacher){
      throw new NotFoundException(`Failed to find teacher with id: ${id}`)
    }
    return teacher
  }

  async getTeacherByUserId(user_id: number) {
    const teacher = await this.teacherRepository.findOne({ where: { user_id } });
    if(!teacher){
      throw new NotFoundException(`Failed to find teacher with user_id: ${user_id}`)
    }
    return teacher;
  }

  async findTeachersByUsername(username: string) {
    return  await this.userRepository.find({
      select: ['id', 'user_role_id', 'username', 'first_name', 'last_name', 'email'],
        where: { username: ILike(`%${username}%`), role_type: RolesEnum.TEACHER }
    });
  }
}

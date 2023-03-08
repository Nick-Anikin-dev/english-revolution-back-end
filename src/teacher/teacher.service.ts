import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from 'typeorm';
import { Teacher } from "./teacher.entity";
import { RolesEnum } from '../constants/roles/roles.enum';
import { User } from '../user/user.entity';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { School } from '../school/sсhool.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
    @InjectRepository(School)
    private readonly schoolsRepository: Repository<School>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {
  }

  async getTeachers(user: AuthUser){
    return await this.teacherRepository
      .createQueryBuilder('teacher')
      .leftJoin(User, 'user',`user.user_role_id = teacher.id AND user.role_type = '${RolesEnum.TEACHER}'`)
      .leftJoin(School, 'school', `school.user_id = ${user.id}`)
      .select(['teacher.id as id', 'first_name', 'email', 'last_name', 'username', 'user.id'])
      .orderBy('user.first_name','ASC')
      .getRawMany();
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

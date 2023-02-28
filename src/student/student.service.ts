import { Injectable, NotFoundException } from '@nestjs/common';
import { ILike, In, Repository } from 'typeorm';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { RolesEnum } from '../constants/roles/roles.enum';
import { AuthUser } from '../auth/interfaces/auth-user.interface';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {
  }

  async createStudent(user_id: number) {
    const new_student = this.studentRepository.create({ user_id });
    return await this.studentRepository.save(new_student);
  }

  async getStudentByUserId(user_id: number) {
    const student = await this.studentRepository.findOne({ where: { user_id }, relations: [ 'teacher' ] });
    if (!student) {
      throw new NotFoundException(`Failed to find student with user_id: ${user_id}`);
    }
    return student;
  }

  async getStudentByIds(student_ids: number[]) {
    return await this.studentRepository.find({
      where: {
        id: In(student_ids),
      },
    });
  }

  async findStudentsByUsername(user: AuthUser, username: string) {
    return await this.userRepository.find({
      select: [ 'id', 'user_role_id', 'username', 'first_name', 'last_name', 'email' ],
      where: { username: ILike(`%${username}%`), role_type: RolesEnum.STUDENT },
    });
  }
}

import { Injectable, NotFoundException } from "@nestjs/common";
import { ILike, Repository } from "typeorm";
import { Student } from "./student.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/user.entity";
import { RolesEnum } from "../constants/roles/roles.enum";

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
    return await this.studentRepository.findOne({ where: { user_id } });
  }

  async findStudentsByUsername(username: string) {
    const users = await this.userRepository.find({
      where: { username: ILike(username), role_type: RolesEnum.STUDENT }
    });
    return users;
  }
}

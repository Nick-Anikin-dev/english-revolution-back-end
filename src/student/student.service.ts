import { Injectable, NotFoundException } from '@nestjs/common';
import { ILike, In, Repository } from 'typeorm';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { RolesEnum } from '../constants/roles/roles.enum';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { Teacher } from '../teacher/teacher.entity';
import { School } from '../school/sсhool.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {
  }

  async getStudents(user: AuthUser) {
    if (user.role === RolesEnum.TEACHER) {
      return await this.studentRepository
        .createQueryBuilder('student')
        .leftJoin(User, 'user',`user.user_role_id = student.id AND user.role_type = '${RolesEnum.STUDENT}'`)
        .leftJoin(Teacher, 'school', `teacher.user_id = ${user.id}`)
        .select(['student.id as id', 'first_name', 'email', 'last_name', 'username', 'user.id'])
        .orderBy('user.first_name','ASC')
        .getRawMany();
    }

    return await this.studentRepository
      .createQueryBuilder('student')
      .leftJoin(User, 'user',`user.user_role_id = student.id AND user.role_type = '${RolesEnum.STUDENT}'`)
      .leftJoin(School, 'school', `school.user_id = ${user.id}`)
      .select(['student.id as id', 'first_name', 'email', 'last_name', 'username', 'user.id'])
      .orderBy('user.first_name','ASC')
      .getRawMany();
  }


  async getStudentById(id: number){
    return await this.studentRepository.findOne({
      where: {id}
    })
  }

  async a(){
    const students = await this.studentRepository.find();
    const school = await this.schoolRepository.findOne({where:{id: 6}})
    return  await this.studentRepository.update({id: In(students.map(s=>s.id))}, school)
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

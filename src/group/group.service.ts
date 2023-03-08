import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroup } from './dtos/create-group.dto';
import { AddStudents } from './dtos/add-students.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './group.entity';
import { Repository } from 'typeorm';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { User } from '../user/user.entity';
import { RolesEnum } from '../constants/roles/roles.enum';
import { UsersService } from '../user/user.service';
import { StudentService } from '../student/student.service';
import { Teacher } from '../teacher/teacher.entity';
import { School } from '../school/sсhool.entity';
import { Student } from '../student/student.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private readonly groupRepository: Repository<Group>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Teacher) private readonly teacherRepository: Repository<Teacher>,
    @InjectRepository(Student) private readonly studentRepository: Repository<Student>,
    private readonly usersService: UsersService,
    private readonly studentService: StudentService,
  ) {
  }

  async getGroups(user: AuthUser) {
    if (user.role === RolesEnum.TEACHER) {
      return await this.groupRepository
        .createQueryBuilder('group')
        .leftJoin(Teacher, 'teacher', `teacher.user_id = ${user.id}`)
        .leftJoinAndSelect('group.students', 'student')
        .loadRelationCountAndMap('group.students_count', 'group.students')
        .select([ 'group.id', 'group.name', 'group.created_at', 'group.updated_at' ])
        .orderBy('group.name', 'ASC')
        .getMany();
    }
    return await this.groupRepository
      .createQueryBuilder('group')
      .leftJoin(School, 'school', `school.user_id = ${user.id}`)
      .leftJoinAndSelect('group.students', 'student')
      .loadRelationCountAndMap('group.students_count', 'group.students')
      .select([ 'group.id', 'group.name', 'group.created_at', 'group.updated_at' ])
      .orderBy('group.name', 'ASC')
      .getMany();
  }


  async getGroupDetails(user: AuthUser, id: number) {
    let group;
    if (user.role === RolesEnum.TEACHER) {
      group = await this.groupRepository
        .createQueryBuilder('group')
        .where(`group.id = ${id}`)
        .leftJoin(Teacher, 'teacher', `teacher.user_id = ${user.id}`)
        .leftJoinAndSelect('group.students', 'student')
        .loadRelationCountAndMap('group.students_count', 'group.students')
        .select([ 'group.id', 'group.name', 'group.created_at', 'group.updated_at', 'group.students' ])
        .orderBy('group.name', 'ASC')
        .getOneOrFail();
    } else {
      group = await this.groupRepository
        .createQueryBuilder('group')
        .where(`group.id = ${id}`)
        .leftJoin(School, 'school', `school.user_id = ${user.id}`)
        .leftJoinAndSelect('group.students', 'student')
        .loadRelationCountAndMap('group.students_count', 'group.students')
        .select([ 'group.id', 'group.name', 'group.created_at', 'group.updated_at', 'student', 'user' ])
        .orderBy('group.name', 'ASC')
        .getOne();
    }

    if (!group) {
      throw new NotFoundException(`Failed to find group with id: ${id}`);
    }
    const student_ids = group.students?.map(student => student.id).toString();
    const mappedStudents = await this.studentRepository
      .createQueryBuilder('student')
      .where(`student.id in (${student_ids ? student_ids : 0})`)
      .leftJoin(User, 'user', `user.user_role_id = student.id  AND user.role_type = '${RolesEnum.STUDENT}'`)
      .select([ 'student.id as id', 'first_name', 'email', 'last_name', 'username', 'user.id' ])
      .orderBy('user.first_name', 'ASC')
      .getRawMany();

    return { ...group, students: mappedStudents };
  }

  async createGroup(user: AuthUser, createGroup: CreateGroup) {
    const new_group = this.groupRepository.create(createGroup);
    const user_role = await this.usersService.getUserRoleDetails(user);
    return await this.groupRepository.save({ ...new_group, school: user_role });
  }

  async addStudents(id: number, user: AuthUser, addStudents: AddStudents) {
    const user_role = await this.userRepository.findOne({
      select: [ 'user_role_id' ],
      where: {
        id: user.id,
      },
    });
    const group = await this.groupRepository.findOne({
      where: {
        id,
        school: {
          id: user_role.user_role_id,
        },
      },
    });
    const current_students = group.students ? group.students : [];
    const students = await this.studentService.getStudentByIds(addStudents.student_ids);
    return await this.groupRepository.save({ ...group, students: [ ...current_students, ...students ] });
  }

  async addStudent(id: number, user: AuthUser, student_id: number) {
    const user_role = await this.userRepository.findOne({
      select: [ 'user_role_id' ],
      where: {
        id: user.id,
      },
    });
    const group = await this.groupRepository.findOne({
      where: {
        id,
        school: {
          id: user_role.user_role_id,
        },
      },
    });
    const student = await this.studentService.getStudentById(student_id);
    const current_students = group.students ? group.students : [];
    return await this.groupRepository.save({ ...group, students: [ ...current_students, student ] });
  }

  async deleteStudent(id: number, user: AuthUser, student_id: number) {
    const user_role = await this.userRepository.findOne({
      select: [ 'user_role_id' ],
      where: {
        id: user.id,
      },
    });
    const group = await this.groupRepository.findOne({
      where: {
        id,
        school: {
          id: user_role.user_role_id,
        },
      },
    });
    const targetStudent = await this.studentService.getStudentById(student_id);
    const current_students = group.students ? group.students : [];
    return await this.groupRepository.save({
      ...group,
      students: current_students.filter(student => student.id !== targetStudent.id),
    });
  }

  async assignTeacher(id: number, user: AuthUser, teacher_id: number) {
    const group = await this.groupRepository.findOne({ where: { id } });
    const school = await this.usersService.getUserRoleDetails(user);
    if (group.school.id !== school.id) {
      throw new ForbiddenException();
    }
    const teacher = await this.teacherRepository.findOne({
      where: {
        id: teacher_id,
      },
    });
    await this.groupRepository.save({ ...group, teacher });
  }

  async deleteGroup(user: AuthUser, id: number) {
  }
}

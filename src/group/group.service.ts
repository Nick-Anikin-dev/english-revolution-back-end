import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroup } from './dtos/create-group.dto';
import { AddStudents } from './dtos/add-students.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './group.entity';
import { Repository } from 'typeorm';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { User } from '../user/user.entity';
import { RolesEnum } from '../constants/roles/roles.enum';
import { RoleFieldEnum } from '../constants/roles/role-field.enum';
import { UsersService } from '../user/user.service';
import { StudentService } from '../student/student.service';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private readonly groupRepository: Repository<Group>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly usersService: UsersService,
    private readonly studentService: StudentService,
  ) {
  }

  async getGroups(user: AuthUser) {
    const user_role = await this.userRepository.findOne({
      select: [ 'user_role_id' ],
      where: {
        id: user.id,
      },
    });
    if (!user_role) {
      throw new NotFoundException();
    }

    let findOptionKey;
    switch (user_role.role_type) {
      case RolesEnum.TEACHER:
        findOptionKey = RoleFieldEnum.TEACHER;
        break;
      case RolesEnum.ADMIN:
        findOptionKey = RoleFieldEnum.SCHOOL;
        break;
      case RolesEnum.SCHOOL_SUPER_ADMIN:
        findOptionKey = RoleFieldEnum.SCHOOL;
        break;
    }
    return await this.groupRepository.find({
      where: {
        [findOptionKey]: {
          id: user_role.user_role_id,
        },
      },
      relations: [ 'students' ],
    });
  }


  async getGroupDetails(user: AuthUser, id: number) {
    const user_role = await this.userRepository.findOne({
      select: [ 'user_role_id' ],
      where: {
        id: user.id,
      },
    });
    return await this.groupRepository.find({
      where: {
        id,
        school: {
          id: user_role.user_role_id,
        },
      },
      relations: [ 'students' ],
    });
  }

  async getTeacherGroupDetails(user: AuthUser, id: number) {
    const user_role = await this.userRepository.findOne({
      select: [ 'user_role_id' ],
      where: {
        id: user.id,
      },
    });
    return await this.groupRepository.find({
      where: {
        id,
        teacher: {
          id: user_role.user_role_id,
        },
      },
      relations: [ 'students' ],
    });
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
    const students = await this.studentService.getStudentByIds(addStudents.student_ids);
    return await this.groupRepository.save({ ...group, students: [ ...group.students, ...students ] });
  }

  async addStudent(user: AuthUser, student_id: number) {
  }

  async deleteStudent(user: AuthUser, student_id: number) {
  }

  async assignTeacher(user: AuthUser, teacher_id: number) {
  }

  async deleteGroup(user: AuthUser, id: number) {
  }


}

import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GroupService } from './group.service';
import { RolesGuard } from '../auth/roles-guard';
import { CreateGroup } from './dtos/create-group.dto';
import { AddStudents } from './dtos/add-students.dto';
import { User } from '../decorators/user.decorator';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { Roles } from '../decorators/roles.decorator';
import { RolesEnum } from '../constants/roles/roles.enum';

@ApiTags('Group')
@Controller('group')
@UseGuards(RolesGuard)
export class GroupController {
  constructor(private readonly groupService: GroupService) {
  }

  @Get()
  @Roles(RolesEnum.TEACHER, RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async getGroups(@User() user: AuthUser) {
    return await this.groupService.getGroups(user);
  }

  @Get('/:id/school')
  @Roles(RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async getGroupDetails(@User() user: AuthUser, @Param('id') id: number) {
    return await this.groupService.getGroupDetails(user, id);
  }

  @Get('/:id/teacher')
  @Roles(RolesEnum.TEACHER)
  async getTeacherGroupDetails(@User() user: AuthUser, @Param('id') id: number) {
    return await this.groupService.getTeacherGroupDetails(user, id);
  }

  @Post()
  @Roles(RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async createGroup(@User() user: AuthUser, @Body() createGroup: CreateGroup) {
    return await this.groupService.createGroup(user, createGroup);
  }

  @Put('/:id/student/:student_id')
  @Roles(RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async addStudent(@User() user: AuthUser, @Param('id') id: number, @Param('student_id') student_id: number) {
    return await this.groupService.addStudent(id, user, student_id);
  }

  @Put('/:id/students')
  @Roles(RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async addStudents(@User() user: AuthUser, @Param('id') id: number, @Body() addStudents: AddStudents) {
    return await this.groupService.addStudents(id, user, addStudents);
  }

  @Delete('/:id/student/:student_id')
  @Roles(RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async deleteStudent(@User() user: AuthUser, @Param('id') id: number, @Param('student_id') student_id: number) {
    return await this.groupService.deleteStudent(id, user, student_id);
  }

  @Delete('/:id')
  @Roles(RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async deleteGroup(@User() user: AuthUser, @Param('id') id: number) {
    return await this.groupService.deleteGroup(user, id);
  }

  @Patch('/:id/teacher/:teacher_id')
  @Roles(RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async assignTeacher(@User() user: AuthUser, @Param('id') id: number, @Param('teacher_id') teacher_id: number) {
    return await this.groupService.assignTeacher(id, user, teacher_id);
  }
}

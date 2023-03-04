import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { TeacherService } from "./teacher.service";
import { ApiTags } from "@nestjs/swagger";
import { RolesGuard } from "../auth/roles-guard";
import { User } from '../decorators/user.decorator';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { Roles } from '../decorators/roles.decorator';
import { RolesEnum } from '../constants/roles/roles.enum';

@ApiTags("Teacher")
@Controller("teacher")
@UseGuards(RolesGuard)
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {
  }

  @Get()
  @Roles(RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async getTeacher(@User() user: AuthUser){
    return await this.teacherService.getTeachers(user);
  }

  @Get('/search')
  async findTeachersByUsername(@Query('username') username: string){
    return await this.teacherService.findTeachersByUsername(username);
  }

  @Get("/:id")
  async getTeacherByUserId(@Param("id") id: number) {
    return await this.teacherService.getTeacherByUserId(id);
  }
}

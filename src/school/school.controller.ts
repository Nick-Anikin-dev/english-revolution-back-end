import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SchoolService } from './school.service';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from '../auth/roles-guard';
import { AssignTeacherToStudents } from './dtos/assign-teacher-to-students.dto';
import { Roles } from '../decorators/roles.decorator';
import { RolesEnum } from '../constants/roles/roles.enum';


@ApiTags('School')
@Controller('school')
@UseGuards(RolesGuard)
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {
  }

  @Get('/:id')
  @Roles(RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async getSchoolByUserId(@Param('id') id: number) {
    return await this.schoolService.getSchoolByUserId(id);
  }

  @Post('/teacher/assign/students')
  @Roles(RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async assignTeacherToStudents(@Body() assignTeacherToStudents: AssignTeacherToStudents) {
    return await this.schoolService.assignTeacherToStudents(assignTeacherToStudents);
  }
}

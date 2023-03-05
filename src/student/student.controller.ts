import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { StudentService } from "./student.service";
import { ApiTags } from "@nestjs/swagger";
import { RolesGuard } from "../auth/roles-guard";
import { Roles } from '../decorators/roles.decorator';
import { RolesEnum } from '../constants/roles/roles.enum';
import { User } from '../decorators/user.decorator';
import { AuthUser } from '../auth/interfaces/auth-user.interface';

@ApiTags("Student")
@Controller('student')
@UseGuards(RolesGuard)
export class StudentController{
  constructor(private readonly studentService: StudentService) {}

  @Get('/mock')
  async a(){
    return await this.studentService.a()
  }


  @Get()
  @Roles(RolesEnum.TEACHER, RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async getStudents(@User() user: AuthUser){
    return await this.studentService.getStudents(user);
  }

  @Get('/search')
  @Roles(RolesEnum.TEACHER, RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async findStudentsByUsername(@User() user: AuthUser, @Query('username') username: string){
    return await this.studentService.findStudentsByUsername(user, username);
  }

  @Get('/:id')
  @Roles(RolesEnum.TEACHER, RolesEnum.ADMIN, RolesEnum.SCHOOL_SUPER_ADMIN)
  async getStudentByUserId(@Param('id') id: number){
    return await this.studentService.getStudentByUserId(id);
  }
}

import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { StudentService } from "./student.service";
import { ApiTags } from "@nestjs/swagger";
import { RolesGuard } from "../auth/roles-guard";

@ApiTags("Student")
@Controller('student')
@UseGuards(RolesGuard)
export class StudentController{
  constructor(private readonly studentService: StudentService) {}
  @Get('/:id')
  async getStudentByUserId(@Param('id') id: number){
    return await this.studentService.getStudentByUserId(id);
  }

  @Get('/search')
  async findStudentsByUsername(@Query('username') username: string){
    return await this.studentService.findStudentsByUsername(username);
  }
}

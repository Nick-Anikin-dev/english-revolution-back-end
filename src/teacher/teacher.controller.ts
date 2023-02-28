import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { TeacherService } from "./teacher.service";
import { ApiTags } from "@nestjs/swagger";
import { RolesGuard } from "../auth/roles-guard";

@ApiTags("Teacher")
@Controller("teacher")
@UseGuards(RolesGuard)
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {
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

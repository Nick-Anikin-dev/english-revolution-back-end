import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { TeacherService } from "./teacher.service";
import { ApiTags } from "@nestjs/swagger";
import { RolesGuard } from "../auth/roles-guard";

@ApiTags("Teacher")
@Controller("teacher")
@UseGuards(RolesGuard)
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {
  }

  @Get("/:id")
  async getTeacherByUserId(@Param("id") id: number) {
    return await this.teacherService.getTeacherByUserId(id);
  }
}

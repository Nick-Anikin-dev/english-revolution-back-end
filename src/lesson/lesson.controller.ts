import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LessonService } from "./lesson.service";
import { CreateLessonDto } from "./dtos/create-lesson.dto";
import { User } from "../decorators/user.decorator";
import { AuthUser } from "../auth/interfaces/auth-user.interface";
import { Roles } from "../decorators/roles.decorator";
import { RolesEnum } from "../constants/roles/roles.enum";
import { RolesGuard } from "../auth/roles-guard";
import { UpdateLessonDto } from "./dtos/update-lesson.dto";

@ApiTags("Lesson")
@Controller("lesson")
@UseGuards(RolesGuard)
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get("/:id")
  @Roles(RolesEnum.STUDENT, RolesEnum.TEACHER)
  async getLessonDetails(@User() user: AuthUser, @Param("id") id: number) {
    return await this.lessonService.getLessonDetails(user, id);
  }

  @Patch("/:id")
  @Roles(RolesEnum.TEACHER)
  async updateLesson(@User() user: AuthUser, @Param("id") id: number, @Body() updateLessonDto: UpdateLessonDto) {
    return await this.lessonService.updateLesson(user, id, updateLessonDto);
  }

  @Post()
  @Roles(RolesEnum.TEACHER)
  async createLesson(@User() user: AuthUser, @Body() createLessonDto: CreateLessonDto) {
    return await this.lessonService.createLesson(user, createLessonDto);
  }

  @Delete("/:id")
  @Roles(RolesEnum.TEACHER)
  async deleteLesson(@User() user: AuthUser, @Param("id") id: number) {
    return await this.lessonService.deleteLesson(user, id);
  }
}

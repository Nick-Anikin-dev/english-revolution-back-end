import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LessonController } from "./lesson.controller";
import { LessonService } from "./lesson.service";
import { Lesson } from "./lesson.entity";
import { AuthModule } from "../auth/auth.module";
import { Student } from "../student/student.entity";
import { Teacher } from "../teacher/teacher.entity";

@Module({
  imports: [ AuthModule, TypeOrmModule.forFeature([ Lesson, Student, Teacher ]) ],
  controllers: [ LessonController ],
  providers: [ LessonService ],
  exports: [ LessonService ]
})
export class LessonModule {
}

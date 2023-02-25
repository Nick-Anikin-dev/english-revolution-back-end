import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./student.entity";
import { StudentController } from "./student.controller";
import { StudentService } from "./student.service";
import { User } from "../user/user.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [  forwardRef(() => AuthModule), TypeOrmModule.forFeature([ Student, User ]) ],
  controllers: [ StudentController ],
  providers: [ StudentService ],
  exports: [ StudentService ]
})
export class StudentModule {
}

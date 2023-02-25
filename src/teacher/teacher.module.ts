import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Teacher } from "./teacher.entity";
import { TeacherController } from "./teacher.controller";
import { TeacherService } from "./teacher.service";
import { User } from "../user/user.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [  forwardRef(() => AuthModule), TypeOrmModule.forFeature([ Teacher, User ]) ],
  controllers: [ TeacherController ],
  providers: [ TeacherService ],
  exports: [ TeacherService ]
})
export class TeacherModule {
}

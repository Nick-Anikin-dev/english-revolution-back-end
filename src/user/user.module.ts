import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from "./user.contoller";
import { UsersService } from "./user.service";
import { User } from "./user.entity";
import { AuthModule } from "../auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentModule } from "../student/student.module";
import { TeacherModule } from "../teacher/teacher.module";
import { SchoolModule } from "../school/school.module";

@Module({
    controllers: [ UsersController ],
    providers: [ UsersService ],
    imports: [
        TypeOrmModule.forFeature([ User ]),
        forwardRef(() => AuthModule),
        StudentModule,
        TeacherModule,
        SchoolModule,
    ],
    exports: [
        UsersService
    ]
})
export class UsersModule {
}

import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './sсhool.entity';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { User } from '../user/user.entity';
import { AuthModule } from '../auth/auth.module';
import { TeacherModule } from '../teacher/teacher.module';
import { StudentModule } from '../student/student.module';
import { Teacher } from '../teacher/teacher.entity';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([ School, User, Teacher, School ]),
    StudentModule,
    TeacherModule
  ],
  controllers: [ SchoolController ],
  providers: [ SchoolService ],
  exports: [ SchoolService ],
})
export class SchoolModule {
}

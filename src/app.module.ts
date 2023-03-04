import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/file.module';
import { DatabaseModule } from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './student/student.module';
import { GroupModule } from './group/group.module';
import { TeacherModule } from './teacher/teacher.module';
import { SchoolModule } from './school/school.module';
import { TopicModule } from './topic/topic.module';
import { LessonModule } from './lesson/lesson.module';
import { HomeworkModule } from './homework/homework.module';
import { ScheduleModule } from './schedule/schedule.module';
import { RequestForCooperationModule } from './request-for-cooperation/request-for-cooperation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    FilesModule,
    StudentModule,
    GroupModule,
    TeacherModule,
    SchoolModule,
    TopicModule,
    LessonModule,
    HomeworkModule,
    ScheduleModule,
    RequestForCooperationModule,
  ],
})
export class AppModule {
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { Group } from './group.entity';
import { AuthModule } from '../auth/auth.module';
import { User } from '../user/user.entity';
import { UsersModule } from '../user/user.module';
import { StudentModule } from '../student/student.module';
import { Teacher } from '../teacher/teacher.entity';

@Module({
  imports: [ UsersModule, AuthModule, StudentModule, TypeOrmModule.forFeature([ Group, User, Teacher ]) ],
  controllers: [ GroupController ],
  providers: [ GroupService ],
  exports: [ GroupService ],
})
export class GroupModule {
}

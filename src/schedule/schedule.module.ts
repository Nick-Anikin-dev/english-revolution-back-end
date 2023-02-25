import { Module } from "@nestjs/common";
import { ScheduleController } from "./schedule.controller";
import { ScheduleService } from "./schedule.service";
import { AuthModule } from "../auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lesson } from "../lesson/lesson.entity";

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([ Lesson ]),
  ],
  controllers: [ ScheduleController ],
  providers: [ ScheduleService ],
  exports: [ ScheduleService ]
})
export class ScheduleModule {
}

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Homework } from "./homework.entity";
import { HomeworkController } from "./homework.controller";
import { HomeworkService } from "./homework.service";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [ AuthModule, TypeOrmModule.forFeature([ Homework ]) ],
  controllers: [ HomeworkController ],
  providers: [ HomeworkService ],
  exports: [ HomeworkService ]
})
export class HomeworkModule {
}

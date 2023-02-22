import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Homework } from "./homework.entity";
import { HomeworkController } from "./homework.controller";
import { HomeworkService } from "./homework.service";

@Module({
  imports: [ TypeOrmModule.forFeature([ Homework ]) ],
  controllers: [ HomeworkController ],
  providers: [ HomeworkService ],
  exports: [ HomeworkService ]
})
export class HomeworkModule {
}

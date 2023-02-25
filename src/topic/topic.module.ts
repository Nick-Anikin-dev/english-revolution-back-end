import { Module } from "@nestjs/common";
import { TopicController } from "./topic.controller";
import { TopicService } from "./topic.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Topic } from "./topic.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [ AuthModule,TypeOrmModule.forFeature([ Topic ]) ],
  controllers: [ TopicController ],
  providers: [ TopicService ],
  exports: [ TopicService ]
})
export class TopicModule {
}

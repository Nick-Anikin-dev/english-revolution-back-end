import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GroupService } from "./group.service";
import { GroupController } from "./group.controller";
import { Group } from "./group.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [ AuthModule, TypeOrmModule.forFeature([ Group ]) ],
  controllers: [ GroupController ],
  providers: [ GroupService ],
  exports: [ GroupService ]
})
export class GroupModule {
}

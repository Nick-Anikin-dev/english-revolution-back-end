import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { School } from "./sсhool.entity";
import { SchoolController } from "./school.controller";
import { SchoolService } from "./school.service";

@Module({
  imports: [ TypeOrmModule.forFeature([ School ]) ],
  controllers: [ SchoolController ],
  providers: [ SchoolService ],
  exports: [ SchoolService ]
})
export class SchoolModule {
}

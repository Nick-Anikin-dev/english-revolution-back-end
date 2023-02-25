import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { School } from "./sсhool.entity";
import { SchoolController } from "./school.controller";
import { SchoolService } from "./school.service";
import { User } from "../user/user.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [  forwardRef(() => AuthModule),TypeOrmModule.forFeature([ School, User ]) ],
  controllers: [ SchoolController ],
  providers: [ SchoolService ],
  exports: [ SchoolService ]
})
export class SchoolModule {
}

import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from "./user.contoller";
import { UsersService } from "./user.service";
import { User } from "./user.entity";
import { AuthModule } from "../auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    controllers: [ UsersController ],
    providers: [ UsersService ],
    imports: [
        TypeOrmModule.forFeature([ User ]),
        forwardRef(() => AuthModule)
    ],
    exports: [
        UsersService
    ]
})
export class UsersModule {
}

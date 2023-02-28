import { Controller, Get, UseGuards } from "@nestjs/common";
import { UsersService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";
import { AuthUser } from "../auth/interfaces/auth-user.interface";
import { User } from "../decorators/user.decorator";
import { RolesGuard } from "../auth/roles-guard";

@ApiTags("User")
@Controller("user")
@UseGuards(RolesGuard)
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Get()
    async getAllUsers() {
        return await this.usersService.getAllUsers();
    }

    @Get()
    async getUserDetails(@User() user: AuthUser) {
        return await this.usersService.getUserRoleDetails(user);
    }
}

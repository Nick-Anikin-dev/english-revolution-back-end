import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from "./user.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository:Repository<User>,
                private roleService: RolesService) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("ADMIN")
        user.roles = [ role ]
        await this.userRepository.save(user)
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.find();
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}})
        return user;
    }

    async addRole(dto: AddRoleDto) {
        // const user = await this.userRepository.findOne({id: dto.userId});
        // const role = await this.roleService.getRoleByValue(dto.value);
        // if (role && user) {
        //     await user.$add('role', role.id);
        //     return dto;
        // }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }

}

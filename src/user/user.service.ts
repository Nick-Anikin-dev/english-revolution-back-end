import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { CreateUserDto } from "./dtos/create-user.dto";
import { AddRoleDto } from "./dtos/add-role.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>
    ) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        await this.userRepository.save(user);
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.find();
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({ where: { email } });
        return user;
    }

    async addRole(dto: AddRoleDto) {
        // const user = await this.userRepository.findOne({id: dtos.userId});
        // const role = await this.roleService.getRoleByValue(dtos.value);
        // if (role && user) {
        //     await user.$add('role', role.id);
        //     return dtos;
        // }
        throw new HttpException("Пользователь или роль не найдены", HttpStatus.NOT_FOUND);
    }
}

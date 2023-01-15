import { Injectable } from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {Role} from "./roles.model";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
@Injectable()
export class RolesService {

    constructor(@InjectRepository(Role) private roleRepository: Repository<any>) {}

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleRepository.create(dto);
        return role;
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {value}})
        return role;
    }

}

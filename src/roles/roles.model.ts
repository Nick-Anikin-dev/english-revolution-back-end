import {ApiProperty} from "@nestjs/swagger";
import {User} from "../user/user.model";
import {UserRoles} from "./user-roles.model";
import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'roles'})
export class Role{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @PrimaryColumn()
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Уникальное Значение роли '})
    @Column()
    value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @Column()
    description: string;

    @ManyToMany(() => User, () => UserRoles)
    users: User[];
}

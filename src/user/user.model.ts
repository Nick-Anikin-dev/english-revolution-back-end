import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import { Entity, Column, ManyToMany, PrimaryColumn } from "typeorm";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Entity({name: 'users'})
export class User{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @PrimaryColumn()
    id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @Column()
    email: string;

    @ApiProperty({example: '12345678', description: 'Пароль'})
    @Column()
    password: string;

    @ApiProperty({example: 'true', description: 'Забанен или нет'})
    @Column()
    banned: boolean;

    @ApiProperty({example: 'За хулиганство', description: 'Причина блокировки'})
    @Column()
    banReason: string;

    @ManyToMany(() => Role, () => UserRoles)
    roles: Role[];

}

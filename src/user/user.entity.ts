import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RolesEnum } from "../constants/roles/roles.enum";


@Entity({ name: "users" })
export class User {
    @ApiProperty({ example: 1, description: "Primary identifier" })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: "John", description: "User first name" })
    @Column({
        type: "varchar",
        nullable: false
    })
    first_name: string;

    @ApiProperty({ example: "Washington", description: "User last name" })
    @Column({
        type: "varchar",
        nullable: false,
    })
    last_name: string;

    @ApiProperty({ example: "user@mail.ru", description: "Email address" })
    @Column({
        type: "varchar",
        nullable: false,
        unique: true,
    })
    email: string;

    @ApiProperty({ example: "super-secured-password", description: "Password" })
    @Column({
        type: "varchar",
        nullable: false
    })
    password: string;

    @ApiProperty({ example: "@user-b1", description: "Unique username" })
    @Column({
        type: "varchar",
        nullable: false,
        unique: true
    })
    username: string;

    @ApiProperty({ example: RolesEnum.STUDENT, description: "User role" })
    @Column({
        type: "enum",
        enum: RolesEnum,
        nullable: false
    })
    role_type: RolesEnum;

    @Column({
        type: "numeric",
        nullable: true,
    })
    user_role_id: number;
}

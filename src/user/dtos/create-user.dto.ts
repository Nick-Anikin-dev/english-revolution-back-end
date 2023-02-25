import {ApiProperty} from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { RolesEnum } from "../../constants/roles/roles.enum";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Email'})
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty({example: '12345', description: 'Password'})
    @IsNotEmpty()
    @IsString()
    @Length(4, 16)
    readonly password: string;

    @ApiProperty({example: 'Nick', description: 'First name'})
    @IsNotEmpty()
    @IsString()
    readonly first_name: string;

    @ApiProperty({example: 'Anikin', description: 'Last name'})
    @IsNotEmpty()
    @IsString()
    readonly last_name: string;

    @ApiProperty({example: '@nick-dev', description: 'Username'})
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @ApiProperty({example: RolesEnum.STUDENT, description: 'Role of user'})
    @IsNotEmpty()
    @IsString()
    readonly role_type: RolesEnum;
}

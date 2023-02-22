import { SignInDto } from "./sign-in.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";
import { RolesEnum } from "../../constants/roles/roles.enum";

export class SignUpDto extends SignInDto {
  @ApiProperty({ example: "example@gmail.com", description: "User first name" })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  first_name: string;

  @ApiProperty({ example: "super-secured-password", description: "User last name" })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  last_name: string;

  @ApiProperty({ example: RolesEnum.STUDENT, description: "User role" })
  @IsNotEmpty()
  @IsEnum(RolesEnum)
  role: RolesEnum;
}

import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class CreateLessonDto {
  @IsNumber()
  @IsNotEmpty()
  student_id: number;

  @IsString()
  @MaxLength(50)
  title: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({
    name: "date_from",
    example: "2023-02-23T13:08:38.995Z",
    description: "Date from value"
  })
  @Transform(({ value }) => new Date(value))
  date_from: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty({
    name: "date_from",
    example: "2023-02-23T13:08:38.995Z",
    description: "Date from value"
  })
  @Transform(({ value }) => new Date(value))
  date_to: string;
}

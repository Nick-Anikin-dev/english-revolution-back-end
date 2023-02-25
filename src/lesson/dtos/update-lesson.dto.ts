import { IsDate, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class UpdateLessonDto {
  @IsNumber()
  @IsOptional()
  student_id: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  title: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({
    name: "date_from",
    example: "2023-02-23T13:08:38.995Z",
    description: "Date from value"
  })
  @Transform(({ value }) => new Date(value))
  date_from: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({
    name: "date_from",
    example: "2023-02-23T13:08:38.995Z",
    description: "Date from value"
  })
  @Transform(({ value }) => new Date(value))
  date_to: string;
}

import { IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class GetScheduleQuery {
  @IsOptional()
  @IsString()
  @ApiProperty({
    name: "date_from",
    example: "2023-02-23T13:08:38.995Z",
    description: "Date from value"
  })
  @Transform(({ value }) => new Date(value))
  date_from: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    name: "date_from",
    example: "2023-02-23T13:08:38.995Z",
    description: "Date from value"
  })
  @Transform(({ value }) => new Date(value))
  date_to: string;
}

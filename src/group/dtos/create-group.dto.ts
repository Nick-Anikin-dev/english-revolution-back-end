import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGroup {
  @IsNotEmpty()
  @IsString()
  name: string;
}

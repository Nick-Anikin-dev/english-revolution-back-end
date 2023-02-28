import { IsArray } from 'class-validator';

export class AddStudents {
  @IsArray()
  student_ids: number[];
}

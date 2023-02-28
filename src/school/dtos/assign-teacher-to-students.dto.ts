import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class AssignTeacherToStudents {
  @IsNotEmpty()
  @IsNumber()
  teacher_id: number;

  @IsArray()
  student_ids: number[];
}

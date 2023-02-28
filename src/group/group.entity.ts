import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";
import { School } from "../school/sсhool.entity";
import { Teacher } from "../teacher/teacher.entity";
import { Student } from "../student/student.entity";
import { Lesson } from "../lesson/lesson.entity";

@Entity({ name: "groups" })
export class Group {
  @ApiProperty({ example: 1, description: "Primary identifier" })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @ManyToOne(() => School, (school) => school.groups)
  school: School;

  @ManyToOne(() => Teacher, (teacher) => teacher.groups)
  teacher: Teacher;

  @OneToMany(() => Lesson, (lesson) => lesson.group)
  lessons: Lesson[];

  @OneToMany(() => Student, (student) => student.group)
  students: Student[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({
    nullable: true
  })
  deleted_at: Date | null;
}

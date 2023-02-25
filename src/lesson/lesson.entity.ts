import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Topic } from "../topic/topic.entity";
import { Student } from "../student/student.entity";
import { Teacher } from "../teacher/teacher.entity";
import { Homework } from "../homework/homework.entity";
import { File } from "../files/interfaces/file.interface";
import { Group } from "../group/group.entity";

@Entity({ name: "lessons" })
export class Lesson {
  @ApiProperty({ example: 1, description: "Primary identifier" })
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Topic, (topic) => topic.lessons)
  topic: Topic;

  @ManyToOne(() => Student, (student) => student.lessons)
  student: Student;

  @ManyToOne(() => Group, (group) => group.lessons)
  group: Group;

  @ManyToOne(() => Teacher, (teacher) => teacher.lessons)
  teacher: Teacher;

  @Column({
    type: "varchar",
    nullable: true
  })
  title: string;

  @OneToOne(() => Homework, (homework) => homework.lesson, {
    nullable: true,
    cascade: ['soft-remove']
  })
  homework?: Homework;

  @Column({
    type: 'jsonb',
    nullable: true,
    default: '[]',
  })
  files: File[];

  @Column({
    type: "timestamp",
    nullable: false
  })
  date_from: Date;

  @Column({
    type: "timestamp",
    nullable: false
  })
  date_to: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({
    nullable: true
  })
  deleted_at: Date;
}

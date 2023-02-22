import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Teacher } from "../teacher/teacher.entity";
import { School } from "../school/sсhool.entity";
import { Group } from "../group/group.entity";
import { Lesson } from "../lesson/lesson.entity";

@Entity({ name: "students" })
export class Student {
  @ApiProperty({ example: 1, description: "Primary identifier" })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "numeric",
    nullable: false
  })
  user_id: number;

  @ManyToOne(() => Teacher, (teacher) => teacher.students)
  teacher: Teacher;

  @ManyToOne(() => School, (school) => school.students)
  school: School;

  @ManyToOne(() => Group, (group) => group.students)
  group: Group;

  @OneToMany(() => Lesson, (lesson) => lesson.student)
  lessons: Lesson[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({
    nullable: true
  })
  deleted_at: Date;
}

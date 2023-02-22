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
import { School } from "../school/sсhool.entity";
import { Student } from "../student/student.entity";
import { Topic } from "../topic/topic.entity";
import { Group } from "../group/group.entity";
import { Lesson } from "../lesson/lesson.entity";

@Entity({ name: "teachers" })
export class Teacher {
  @ApiProperty({ example: 1, description: "Primary identifier" })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "numeric",
    nullable: false
  })
  user_id: number;

  @OneToMany(() => Student, (student) => student.teacher)
  students: Student[];

  @OneToMany(() => Group, (group) => group.teacher)
  groups: Group[];

  @OneToMany(() => Topic, (topic) => topic.teacher)
  topics: Topic[];

  @ManyToOne(() => School, (school) => school.teachers)
  school: School;

  @OneToMany(() => Lesson, (lesson) => lesson.teacher)
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

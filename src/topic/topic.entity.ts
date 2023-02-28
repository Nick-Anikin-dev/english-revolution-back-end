import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Teacher } from "../teacher/teacher.entity";
import { Lesson } from "../lesson/lesson.entity";
import { File } from "../files/interfaces/file.interface";

@Entity({ name: "topics" })
export class Topic {
  @ApiProperty({ example: 1, description: "Primary identifier" })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  user_id: number;

  @ManyToOne(() => Teacher, (teacher) => teacher.topics)
  teacher: Teacher;

  @OneToMany(() => Lesson, (lesson) => lesson.topic)
  lessons: Lesson[];

  @ApiProperty({ example: "Phrasal verbs", description: "Title of topic" })
  @Column({
    type: "varchar",
    nullable: false
  })
  title: string;

  @ApiProperty({ example: "Types of phrasal verbs", description: "Topic description" })
  @Column({
    type: "varchar",
    nullable: true
  })
  description: string;

  @Column({
    type: 'jsonb',
    nullable: true,
    default: '[]',
  })
  files: File[];

  @CreateDateColumn()
  created_at: Date;
}

import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Lesson } from "../lesson/lesson.entity";
import { File } from "../files/interfaces/file.interface";

@Entity({ name: "homeworks" })
export class Homework {
  @ApiProperty({ example: 1, description: "Primary identifier" })
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Lesson, (lesson) => lesson.homework)
  lesson: Lesson;

  @Column({
    type: 'varchar',
    nullable: true
  })
  description: string;

  @Column({
    type: 'jsonb',
    nullable: true,
    default: '[]',
  })
  files: File[] | null;

  @Column({
    type: 'jsonb',
    nullable: true,
    default: null,
  })
  review: File | null;

  @Column({
    type: 'jsonb',
    nullable: true,
    default: null,
  })
  fixes: File | null;

  @Column({
    type: 'varchar',
    nullable: true
  })
  mark: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

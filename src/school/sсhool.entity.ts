import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Teacher } from "../teacher/teacher.entity";
import { Student } from "../student/student.entity";
import { Group } from "../group/group.entity";

@Entity({ name: "schools" })
export class School {
  @ApiProperty({ example: 1, description: "Primary identifier" })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "numeric",
    nullable: false
  })
  user_id: number;

  @ApiProperty({ example: "SkyEng", description: "School name" })
  @Column({
    type: "varchar",
    nullable: true
  })
  name: string;

  @OneToMany(() => Group, (group) => group.school)
  groups: Group[];

  @OneToMany(() => Student, (student) => student.school)
  students: Student[];

  @OneToMany(() => Teacher, (teacher) => teacher.school)
  teachers: Teacher[];

  @CreateDateColumn()
  created_at: Date;
}

import { Injectable } from "@nestjs/common";
import { CreateGroup } from './dtos/create-group.dto';
import { AddStudents } from './dtos/add-students.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(@InjectRepository(Group) groupRepository: Repository<Group>) {
  }
  async getGroups(){}

  async getGroupDetails(id: number){}

  async createGroup(createGroup: CreateGroup){

  }

  async addStudents(addStudents :AddStudents){

  }

  async addStudent(student_id: number){}

  async deleteStudent(student_id: number){}

  async assignTeacher(teacher_id: number){}

  async deleteGroup(id: number){}


}

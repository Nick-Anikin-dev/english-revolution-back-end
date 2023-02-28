import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { GroupService } from "./group.service";
import { RolesGuard } from "../auth/roles-guard";
import { CreateGroup } from './dtos/create-group.dto';
import { AddStudents } from './dtos/add-students.dto';

@ApiTags("Group")
@Controller('group')
@UseGuards(RolesGuard)
export class GroupController {
  constructor(private readonly groupService: GroupService) {
  }
  @Get()
  async getGroups(){
    return await this.groupService.getGroups();
  }

  @Get('/:id')
  async getGroupDetails(@Param('id') id: number){
    return await this.groupService.getGroupDetails(id)
  }

  @Post()
  async createGroup(@Body() createGroup: CreateGroup){
    return await this.groupService.createGroup(createGroup)
  }

  @Put('/student/:student_id')
  async addStudent(@Param('student_id') student_id: number){
    return await this.groupService.addStudent(student_id);
  }

  @Put('/students')
  async addStudents(@Body() addStudents :AddStudents){
    return await this.groupService.addStudents(addStudents);
  }

  @Delete('/student/:student_id')
  async deleteStudent(@Param('student_id') student_id: number){
    return await this.groupService.deleteStudent(student_id);
  }

  @Delete('/:id')
  async deleteGroup(@Param('id') id: number){
    return await this.groupService.deleteGroup(id);
  }

  @Patch('/teacher/:teacher_id')
  async assignTeacher(@Param('teacher_id') teacher_id: number){
    return await this.groupService.assignTeacher(teacher_id);
  }
}

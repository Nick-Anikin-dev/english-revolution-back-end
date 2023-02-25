import { Controller, Delete, Get, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { GroupService } from "./group.service";
import { RolesGuard } from "../auth/roles-guard";

@ApiTags("Group")
@Controller('group')
@UseGuards(RolesGuard)
export class GroupController {
  constructor(private readonly groupService: GroupService) {
  }
  @Get()
  async getGroups(){}

  @Get()
  async getGroupDetails(){}

  @Post()
  async addGroup(){}

  @Put()
  async addStudent(){}

  @Delete()
  async deleteStudent(){}

  @Patch()
  async assignTeacher(){}
}

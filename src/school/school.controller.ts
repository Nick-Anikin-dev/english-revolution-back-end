import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { SchoolService } from "./school.service";
import { ApiTags } from "@nestjs/swagger";
import { RolesGuard } from "../auth/roles-guard";


@ApiTags("School")
@Controller("school")
@UseGuards(RolesGuard)
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {
  }

  @Get("/:id")
  async getSchoolByUserId(@Param("id") id: number) {
    return await this.schoolService.getSchoolByUserId(id);
  }
}

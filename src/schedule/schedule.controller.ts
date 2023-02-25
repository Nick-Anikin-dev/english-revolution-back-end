import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Roles } from "../decorators/roles.decorator";
import { RolesEnum } from "../constants/roles/roles.enum";
import { RolesGuard } from "../auth/roles-guard";
import { User } from "../decorators/user.decorator";
import { AuthUser } from "../auth/interfaces/auth-user.interface";
import { GetScheduleQuery } from "./dtos/get-schedule.query.dto";
import { ScheduleService } from "./schedule.service";


@ApiTags("Schedule")
@Controller('schedule')
@UseGuards(RolesGuard)
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {
  }
  @Get()
  @Roles(RolesEnum.STUDENT, RolesEnum.TEACHER)
  async getSchedule(@User() user: AuthUser, @Query() getScheduleQuery: GetScheduleQuery){
    return await this.scheduleService.getSchedule(user, getScheduleQuery);
  }
}

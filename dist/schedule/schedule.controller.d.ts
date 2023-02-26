import { AuthUser } from "../auth/interfaces/auth-user.interface";
import { GetScheduleQuery } from "./dtos/get-schedule.query.dto";
import { ScheduleService } from "./schedule.service";
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    getSchedule(user: AuthUser, getScheduleQuery: GetScheduleQuery): Promise<import("../lesson/lesson.entity").Lesson[]>;
}

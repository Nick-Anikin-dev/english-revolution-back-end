import { Repository } from "typeorm";
import { Lesson } from "../lesson/lesson.entity";
import { AuthUser } from "../auth/interfaces/auth-user.interface";
import { GetScheduleQuery } from "./dtos/get-schedule.query.dto";
export declare class ScheduleService {
    private readonly lessonRepository;
    constructor(lessonRepository: Repository<Lesson>);
    getSchedule(user: AuthUser, scheduleQuery: GetScheduleQuery): Promise<Lesson[]>;
}

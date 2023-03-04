import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from '../lesson/lesson.entity';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { GetScheduleQuery } from './dtos/get-schedule.query.dto';

@Injectable()
export class ScheduleService {
  constructor(@InjectRepository(Lesson) private readonly lessonRepository: Repository<Lesson>) {
  }

  async getSchedule(user: AuthUser, scheduleQuery: GetScheduleQuery) {
    return await this.lessonRepository.find({
      where: [
        { teacher: { user_id: user.id } },
        { student: { user_id: user.id } },
      ],
      order: {
        date_from: 'ASC',
      },
    });
  }
}

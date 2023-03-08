import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from '../lesson/lesson.entity';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { GetScheduleQuery } from './dtos/get-schedule.query.dto';
import * as moment from 'moment';

@Injectable()
export class ScheduleService {
  constructor(@InjectRepository(Lesson) private readonly lessonRepository: Repository<Lesson>) {
  }

  async getSchedule(user: AuthUser, scheduleQuery: GetScheduleQuery) {
    const schedule = await this.lessonRepository.find({
      where: [
        { teacher: { user_id: user.id } },
        { student: { user_id: user.id } },
      ],
      order: {
        date_from: 'ASC',
      },
    });
    const week = [ [], [], [], [], [], [], [] ];
    return schedule.reduce((acc, current) => {
      let index = moment(current.date_from).day() - 1;
      if (index < 0) {
        index = 6;
      }
      if (acc[index]) {
        acc[index].push(current);
        return acc;
      }
      return acc;
    }, week);
  }
}

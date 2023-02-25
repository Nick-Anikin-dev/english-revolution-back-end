import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "../student/student.entity";
import { Repository } from "typeorm";
import { School } from "./sсhool.entity";

@Injectable()
export class SchoolService{
  constructor(
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>) {
  }

  async createSchool(user_id: number) {
    const new_school = this.schoolRepository.create({ user_id });
    return await this.schoolRepository.save(new_school);
  }

  async getSchoolByUserId(user_id: number) {
    return await this.schoolRepository.findOne({ where: { user_id } });
  }
}

import { Repository } from "typeorm";
import { School } from "./sсhool.entity";
export declare class SchoolService {
    private readonly schoolRepository;
    constructor(schoolRepository: Repository<School>);
    createSchool(user_id: number): Promise<School>;
    getSchoolByUserId(user_id: number): Promise<School>;
}

import { SchoolService } from "./school.service";
export declare class SchoolController {
    private readonly schoolService;
    constructor(schoolService: SchoolService);
    getSchoolByUserId(id: number): Promise<import("./s\u0441hool.entity").School>;
}

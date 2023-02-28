import { GroupService } from "./group.service";
import { CreateGroup } from './dtos/create-group.dto';
import { AddStudents } from './dtos/add-students.dto';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    getGroups(): Promise<void>;
    getGroupDetails(id: number): Promise<void>;
    createGroup(createGroup: CreateGroup): Promise<void>;
    addStudent(student_id: number): Promise<void>;
    addStudents(addStudents: AddStudents): Promise<void>;
    deleteStudent(student_id: number): Promise<void>;
    deleteGroup(id: number): Promise<void>;
    assignTeacher(teacher_id: number): Promise<void>;
}

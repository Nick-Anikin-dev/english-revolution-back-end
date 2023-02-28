import { CreateGroup } from './dtos/create-group.dto';
import { AddStudents } from './dtos/add-students.dto';
import { Group } from './group.entity';
import { Repository } from 'typeorm';
export declare class GroupService {
    constructor(groupRepository: Repository<Group>);
    getGroups(): Promise<void>;
    getGroupDetails(id: number): Promise<void>;
    createGroup(createGroup: CreateGroup): Promise<void>;
    addStudents(addStudents: AddStudents): Promise<void>;
    addStudent(student_id: number): Promise<void>;
    deleteStudent(student_id: number): Promise<void>;
    assignTeacher(teacher_id: number): Promise<void>;
    deleteGroup(id: number): Promise<void>;
}

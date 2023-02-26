import { GroupService } from "./group.service";
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    getGroups(): Promise<void>;
    getGroupDetails(): Promise<void>;
    addGroup(): Promise<void>;
    addStudent(): Promise<void>;
    deleteStudent(): Promise<void>;
    assignTeacher(): Promise<void>;
}

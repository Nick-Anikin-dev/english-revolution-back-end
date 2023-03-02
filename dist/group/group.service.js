"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const group_entity_1 = require("./group.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const roles_enum_1 = require("../constants/roles/roles.enum");
const role_field_enum_1 = require("../constants/roles/role-field.enum");
const user_service_1 = require("../user/user.service");
const student_service_1 = require("../student/student.service");
let GroupService = class GroupService {
    constructor(groupRepository, userRepository, usersService, studentService) {
        this.groupRepository = groupRepository;
        this.userRepository = userRepository;
        this.usersService = usersService;
        this.studentService = studentService;
    }
    async getGroups(user) {
        const user_role = await this.userRepository.findOne({
            select: ['user_role_id'],
            where: {
                id: user.id,
            },
        });
        if (!user_role) {
            throw new common_1.NotFoundException();
        }
        let findOptionKey;
        switch (user_role.role_type) {
            case roles_enum_1.RolesEnum.TEACHER:
                findOptionKey = role_field_enum_1.RoleFieldEnum.TEACHER;
                break;
            case roles_enum_1.RolesEnum.ADMIN:
                findOptionKey = role_field_enum_1.RoleFieldEnum.SCHOOL;
                break;
            case roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN:
                findOptionKey = role_field_enum_1.RoleFieldEnum.SCHOOL;
                break;
        }
        return await this.groupRepository.find({
            where: {
                [findOptionKey]: {
                    id: user_role.user_role_id,
                },
            },
            relations: ['students'],
        });
    }
    async getGroupDetails(user, id) {
        const user_role = await this.userRepository.findOne({
            select: ['user_role_id'],
            where: {
                id: user.id,
            },
        });
        return await this.groupRepository.find({
            where: {
                id,
                school: {
                    id: user_role.user_role_id,
                },
            },
            relations: ['students'],
        });
    }
    async getTeacherGroupDetails(user, id) {
        const user_role = await this.userRepository.findOne({
            select: ['user_role_id'],
            where: {
                id: user.id,
            },
        });
        return await this.groupRepository.find({
            where: {
                id,
                teacher: {
                    id: user_role.user_role_id,
                },
            },
            relations: ['students'],
        });
    }
    async createGroup(user, createGroup) {
        const new_group = this.groupRepository.create(createGroup);
        const user_role = await this.usersService.getUserRoleDetails(user);
        return await this.groupRepository.save(Object.assign(Object.assign({}, new_group), { school: user_role }));
    }
    async addStudents(id, user, addStudents) {
        const user_role = await this.userRepository.findOne({
            select: ['user_role_id'],
            where: {
                id: user.id,
            },
        });
        const group = await this.groupRepository.findOne({
            where: {
                id,
                school: {
                    id: user_role.user_role_id,
                },
            },
        });
        const students = await this.studentService.getStudentByIds(addStudents.student_ids);
        return await this.groupRepository.save(Object.assign(Object.assign({}, group), { students: [...group.students, ...students] }));
    }
    async addStudent(user, student_id) {
    }
    async deleteStudent(user, student_id) {
    }
    async assignTeacher(user, teacher_id) {
    }
    async deleteGroup(user, id) {
    }
};
GroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(group_entity_1.Group)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        user_service_1.UsersService,
        student_service_1.StudentService])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map
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
exports.GroupController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const group_service_1 = require("./group.service");
const roles_guard_1 = require("../auth/roles-guard");
const create_group_dto_1 = require("./dtos/create-group.dto");
const add_students_dto_1 = require("./dtos/add-students.dto");
const user_decorator_1 = require("../decorators/user.decorator");
const roles_decorator_1 = require("../decorators/roles.decorator");
const roles_enum_1 = require("../constants/roles/roles.enum");
let GroupController = class GroupController {
    constructor(groupService) {
        this.groupService = groupService;
    }
    async getGroups(user) {
        return await this.groupService.getGroups(user);
    }
    async getGroupDetails(user, id) {
        return await this.groupService.getGroupDetails(user, id);
    }
    async getTeacherGroupDetails(user, id) {
        return await this.groupService.getTeacherGroupDetails(user, id);
    }
    async createGroup(user, createGroup) {
        return await this.groupService.createGroup(user, createGroup);
    }
    async addStudent(user, id, student_id) {
        return await this.groupService.addStudent(id, user, student_id);
    }
    async addStudents(user, id, addStudents) {
        return await this.groupService.addStudents(id, user, addStudents);
    }
    async deleteStudent(user, id, student_id) {
        return await this.groupService.deleteStudent(id, user, student_id);
    }
    async deleteGroup(user, id) {
        return await this.groupService.deleteGroup(user, id);
    }
    async assignTeacher(user, id, teacher_id) {
        return await this.groupService.assignTeacher(id, user, teacher_id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.TEACHER, roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "getGroups", null);
__decorate([
    (0, common_1.Get)('/:id/school'),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "getGroupDetails", null);
__decorate([
    (0, common_1.Get)('/:id/teacher'),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.TEACHER),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "getTeacherGroupDetails", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_group_dto_1.CreateGroup]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "createGroup", null);
__decorate([
    (0, common_1.Put)('/:id/student/:student_id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('student_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "addStudent", null);
__decorate([
    (0, common_1.Put)('/:id/students'),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, add_students_dto_1.AddStudents]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "addStudents", null);
__decorate([
    (0, common_1.Delete)('/:id/student/:student_id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('student_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "deleteStudent", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "deleteGroup", null);
__decorate([
    (0, common_1.Patch)('/:id/teacher/:teacher_id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('teacher_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "assignTeacher", null);
GroupController = __decorate([
    (0, swagger_1.ApiTags)('Group'),
    (0, common_1.Controller)('group'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [group_service_1.GroupService])
], GroupController);
exports.GroupController = GroupController;
//# sourceMappingURL=group.controller.js.map
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
let GroupController = class GroupController {
    constructor(groupService) {
        this.groupService = groupService;
    }
    async getGroups() {
        return await this.groupService.getGroups();
    }
    async getGroupDetails(id) {
        return await this.groupService.getGroupDetails(id);
    }
    async createGroup(createGroup) {
        return await this.groupService.createGroup(createGroup);
    }
    async addStudent(student_id) {
        return await this.groupService.addStudent(student_id);
    }
    async addStudents(addStudents) {
        return await this.groupService.addStudents(addStudents);
    }
    async deleteStudent(student_id) {
        return await this.groupService.deleteStudent(student_id);
    }
    async deleteGroup(id) {
        return await this.groupService.deleteGroup(id);
    }
    async assignTeacher(teacher_id) {
        return await this.groupService.assignTeacher(teacher_id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "getGroups", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "getGroupDetails", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_group_dto_1.CreateGroup]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "createGroup", null);
__decorate([
    (0, common_1.Put)('/student/:student_id'),
    __param(0, (0, common_1.Param)('student_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "addStudent", null);
__decorate([
    (0, common_1.Put)('/students'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_students_dto_1.AddStudents]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "addStudents", null);
__decorate([
    (0, common_1.Delete)('/student/:student_id'),
    __param(0, (0, common_1.Param)('student_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "deleteStudent", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "deleteGroup", null);
__decorate([
    (0, common_1.Patch)('/teacher/:teacher_id'),
    __param(0, (0, common_1.Param)('teacher_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "assignTeacher", null);
GroupController = __decorate([
    (0, swagger_1.ApiTags)("Group"),
    (0, common_1.Controller)('group'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [group_service_1.GroupService])
], GroupController);
exports.GroupController = GroupController;
//# sourceMappingURL=group.controller.js.map
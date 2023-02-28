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
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
const teacher_service_1 = require("./teacher.service");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../auth/roles-guard");
let TeacherController = class TeacherController {
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    async findTeachersByUsername(username) {
        return await this.teacherService.findTeachersByUsername(username);
    }
    async getTeacherByUserId(id) {
        return await this.teacherService.getTeacherByUserId(id);
    }
};
__decorate([
    (0, common_1.Get)('/search'),
    __param(0, (0, common_1.Query)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "findTeachersByUsername", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "getTeacherByUserId", null);
TeacherController = __decorate([
    (0, swagger_1.ApiTags)("Teacher"),
    (0, common_1.Controller)("teacher"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService])
], TeacherController);
exports.TeacherController = TeacherController;
//# sourceMappingURL=teacher.controller.js.map
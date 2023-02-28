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
exports.SchoolController = void 0;
const common_1 = require("@nestjs/common");
const school_service_1 = require("./school.service");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../auth/roles-guard");
const assign_teacher_to_students_dto_1 = require("./dtos/assign-teacher-to-students.dto");
const roles_decorator_1 = require("../decorators/roles.decorator");
const roles_enum_1 = require("../constants/roles/roles.enum");
let SchoolController = class SchoolController {
    constructor(schoolService) {
        this.schoolService = schoolService;
    }
    async getSchoolByUserId(id) {
        return await this.schoolService.getSchoolByUserId(id);
    }
    async assignTeacherToStudents(assignTeacherToStudents) {
        return await this.schoolService.assignTeacherToStudents(assignTeacherToStudents);
    }
};
__decorate([
    (0, common_1.Get)('/:id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "getSchoolByUserId", null);
__decorate([
    (0, common_1.Post)('/teacher/assign/students'),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [assign_teacher_to_students_dto_1.AssignTeacherToStudents]),
    __metadata("design:returntype", Promise)
], SchoolController.prototype, "assignTeacherToStudents", null);
SchoolController = __decorate([
    (0, swagger_1.ApiTags)('School'),
    (0, common_1.Controller)('school'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [school_service_1.SchoolService])
], SchoolController);
exports.SchoolController = SchoolController;
//# sourceMappingURL=school.controller.js.map
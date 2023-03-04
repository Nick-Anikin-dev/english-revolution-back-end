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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../auth/roles-guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const roles_enum_1 = require("../constants/roles/roles.enum");
const user_decorator_1 = require("../decorators/user.decorator");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async getStudents(user) {
        return await this.studentService.getStudents(user);
    }
    async findStudentsByUsername(user, username) {
        return await this.studentService.findStudentsByUsername(user, username);
    }
    async getStudentByUserId(id) {
        return await this.studentService.getStudentByUserId(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.TEACHER, roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudents", null);
__decorate([
    (0, common_1.Get)('/search'),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.TEACHER, roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findStudentsByUsername", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.TEACHER, roles_enum_1.RolesEnum.ADMIN, roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudentByUserId", null);
StudentController = __decorate([
    (0, swagger_1.ApiTags)("Student"),
    (0, common_1.Controller)('student'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map
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
exports.LessonController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lesson_service_1 = require("./lesson.service");
const create_lesson_dto_1 = require("./dtos/create-lesson.dto");
const user_decorator_1 = require("../decorators/user.decorator");
const roles_decorator_1 = require("../decorators/roles.decorator");
const roles_enum_1 = require("../constants/roles/roles.enum");
const roles_guard_1 = require("../auth/roles-guard");
const update_lesson_dto_1 = require("./dtos/update-lesson.dto");
let LessonController = class LessonController {
    constructor(lessonService) {
        this.lessonService = lessonService;
    }
    async getLessonDetails(user, id) {
        return await this.lessonService.getLessonDetails(user, id);
    }
    async updateLesson(user, id, updateLessonDto) {
        return await this.lessonService.updateLesson(user, id, updateLessonDto);
    }
    async createLesson(user, createLessonDto) {
        return await this.lessonService.createLesson(user, createLessonDto);
    }
    async deleteLesson(user, id) {
        return await this.lessonService.deleteLesson(user, id);
    }
};
__decorate([
    (0, common_1.Get)("/:id"),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.STUDENT, roles_enum_1.RolesEnum.TEACHER),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], LessonController.prototype, "getLessonDetails", null);
__decorate([
    (0, common_1.Patch)("/:id"),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.TEACHER),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_lesson_dto_1.UpdateLessonDto]),
    __metadata("design:returntype", Promise)
], LessonController.prototype, "updateLesson", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.TEACHER),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_lesson_dto_1.CreateLessonDto]),
    __metadata("design:returntype", Promise)
], LessonController.prototype, "createLesson", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.TEACHER),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], LessonController.prototype, "deleteLesson", null);
LessonController = __decorate([
    (0, swagger_1.ApiTags)("Lesson"),
    (0, common_1.Controller)("lesson"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [lesson_service_1.LessonService])
], LessonController);
exports.LessonController = LessonController;
//# sourceMappingURL=lesson.controller.js.map
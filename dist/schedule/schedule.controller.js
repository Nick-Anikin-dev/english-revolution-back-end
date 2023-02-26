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
exports.ScheduleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../decorators/roles.decorator");
const roles_enum_1 = require("../constants/roles/roles.enum");
const roles_guard_1 = require("../auth/roles-guard");
const user_decorator_1 = require("../decorators/user.decorator");
const get_schedule_query_dto_1 = require("./dtos/get-schedule.query.dto");
const schedule_service_1 = require("./schedule.service");
let ScheduleController = class ScheduleController {
    constructor(scheduleService) {
        this.scheduleService = scheduleService;
    }
    async getSchedule(user, getScheduleQuery) {
        return await this.scheduleService.getSchedule(user, getScheduleQuery);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.RolesEnum.STUDENT, roles_enum_1.RolesEnum.TEACHER),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, get_schedule_query_dto_1.GetScheduleQuery]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "getSchedule", null);
ScheduleController = __decorate([
    (0, swagger_1.ApiTags)("Schedule"),
    (0, common_1.Controller)('schedule'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService])
], ScheduleController);
exports.ScheduleController = ScheduleController;
//# sourceMappingURL=schedule.controller.js.map
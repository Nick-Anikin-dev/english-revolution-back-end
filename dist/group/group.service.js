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
let GroupService = class GroupService {
    constructor(groupRepository) {
    }
    async getGroups() { }
    async getGroupDetails(id) { }
    async createGroup(createGroup) {
    }
    async addStudents(addStudents) {
    }
    async addStudent(student_id) { }
    async deleteStudent(student_id) { }
    async assignTeacher(teacher_id) { }
    async deleteGroup(id) { }
};
GroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(group_entity_1.Group)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map
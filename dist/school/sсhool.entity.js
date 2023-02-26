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
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const teacher_entity_1 = require("../teacher/teacher.entity");
const student_entity_1 = require("../student/student.entity");
const group_entity_1 = require("../group/group.entity");
let School = class School {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Primary identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], School.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric",
        nullable: false
    }),
    __metadata("design:type", Number)
], School.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "SkyEng", description: "School name" }),
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: true
    }),
    __metadata("design:type", String)
], School.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => group_entity_1.Group, (group) => group.school),
    __metadata("design:type", Array)
], School.prototype, "groups", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_entity_1.Student, (student) => student.school),
    __metadata("design:type", Array)
], School.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => teacher_entity_1.Teacher, (teacher) => teacher.school),
    __metadata("design:type", Array)
], School.prototype, "teachers", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], School.prototype, "created_at", void 0);
School = __decorate([
    (0, typeorm_1.Entity)({ name: "schools" })
], School);
exports.School = School;
//# sourceMappingURL=s%D1%81hool.entity.js.map
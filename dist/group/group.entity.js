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
exports.Group = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const s_hool_entity_1 = require("../school/s\u0441hool.entity");
const teacher_entity_1 = require("../teacher/teacher.entity");
const student_entity_1 = require("../student/student.entity");
const lesson_entity_1 = require("../lesson/lesson.entity");
let Group = class Group {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Primary identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Group.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], Group.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => s_hool_entity_1.School, (school) => school.groups),
    __metadata("design:type", s_hool_entity_1.School)
], Group.prototype, "school", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.Teacher, (teacher) => teacher.groups),
    __metadata("design:type", teacher_entity_1.Teacher)
], Group.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lesson_entity_1.Lesson, (lesson) => lesson.group),
    __metadata("design:type", Array)
], Group.prototype, "lessons", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_entity_1.Student, (student) => student.group),
    __metadata("design:type", Array)
], Group.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Group.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Group.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        nullable: true
    }),
    __metadata("design:type", Date)
], Group.prototype, "deleted_at", void 0);
Group = __decorate([
    (0, typeorm_1.Entity)({ name: "groups" })
], Group);
exports.Group = Group;
//# sourceMappingURL=group.entity.js.map
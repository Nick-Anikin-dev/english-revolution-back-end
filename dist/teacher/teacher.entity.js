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
exports.Teacher = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const s_hool_entity_1 = require("../school/s\u0441hool.entity");
const student_entity_1 = require("../student/student.entity");
const topic_entity_1 = require("../topic/topic.entity");
const group_entity_1 = require("../group/group.entity");
const lesson_entity_1 = require("../lesson/lesson.entity");
let Teacher = class Teacher {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Primary identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Teacher.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric",
        nullable: false
    }),
    __metadata("design:type", Number)
], Teacher.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_entity_1.Student, (student) => student.teacher),
    __metadata("design:type", Array)
], Teacher.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => group_entity_1.Group, (group) => group.teacher),
    __metadata("design:type", Array)
], Teacher.prototype, "groups", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => topic_entity_1.Topic, (topic) => topic.teacher),
    __metadata("design:type", Array)
], Teacher.prototype, "topics", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => s_hool_entity_1.School, (school) => school.teachers),
    __metadata("design:type", s_hool_entity_1.School)
], Teacher.prototype, "school", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lesson_entity_1.Lesson, (lesson) => lesson.teacher),
    __metadata("design:type", Array)
], Teacher.prototype, "lessons", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Teacher.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Teacher.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        nullable: true
    }),
    __metadata("design:type", Date)
], Teacher.prototype, "deleted_at", void 0);
Teacher = __decorate([
    (0, typeorm_1.Entity)({ name: "teachers" })
], Teacher);
exports.Teacher = Teacher;
//# sourceMappingURL=teacher.entity.js.map
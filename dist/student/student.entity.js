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
exports.Student = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const teacher_entity_1 = require("../teacher/teacher.entity");
const s_hool_entity_1 = require("../school/s\u0441hool.entity");
const group_entity_1 = require("../group/group.entity");
const lesson_entity_1 = require("../lesson/lesson.entity");
let Student = class Student {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Primary identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", Number)
], Student.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.Teacher, (teacher) => teacher.students),
    __metadata("design:type", teacher_entity_1.Teacher)
], Student.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => s_hool_entity_1.School, (school) => school.students),
    __metadata("design:type", s_hool_entity_1.School)
], Student.prototype, "school", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_entity_1.Group, (group) => group.students),
    __metadata("design:type", group_entity_1.Group)
], Student.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lesson_entity_1.Lesson, (lesson) => lesson.student),
    __metadata("design:type", Array)
], Student.prototype, "lessons", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Student.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Student.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        nullable: true
    }),
    __metadata("design:type", Date)
], Student.prototype, "deleted_at", void 0);
Student = __decorate([
    (0, typeorm_1.Entity)({ name: "students" })
], Student);
exports.Student = Student;
//# sourceMappingURL=student.entity.js.map
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
exports.Lesson = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const topic_entity_1 = require("../topic/topic.entity");
const student_entity_1 = require("../student/student.entity");
const teacher_entity_1 = require("../teacher/teacher.entity");
const homework_entity_1 = require("../homework/homework.entity");
const group_entity_1 = require("../group/group.entity");
let Lesson = class Lesson {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Primary identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Lesson.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => topic_entity_1.Topic, (topic) => topic.lessons),
    __metadata("design:type", topic_entity_1.Topic)
], Lesson.prototype, "topic", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, (student) => student.lessons),
    __metadata("design:type", student_entity_1.Student)
], Lesson.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_entity_1.Group, (group) => group.lessons),
    __metadata("design:type", group_entity_1.Group)
], Lesson.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.Teacher, (teacher) => teacher.lessons),
    __metadata("design:type", teacher_entity_1.Teacher)
], Lesson.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: true
    }),
    __metadata("design:type", String)
], Lesson.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => homework_entity_1.Homework, (homework) => homework.lesson, {
        nullable: true,
        cascade: ['soft-remove']
    }),
    __metadata("design:type", homework_entity_1.Homework)
], Lesson.prototype, "homework", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        nullable: true,
        default: '[]',
    }),
    __metadata("design:type", Array)
], Lesson.prototype, "files", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "timestamp",
        nullable: false
    }),
    __metadata("design:type", Date)
], Lesson.prototype, "date_from", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "timestamp",
        nullable: false
    }),
    __metadata("design:type", Date)
], Lesson.prototype, "date_to", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Lesson.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Lesson.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        nullable: true
    }),
    __metadata("design:type", Date)
], Lesson.prototype, "deleted_at", void 0);
Lesson = __decorate([
    (0, typeorm_1.Entity)({ name: "lessons" })
], Lesson);
exports.Lesson = Lesson;
//# sourceMappingURL=lesson.entity.js.map
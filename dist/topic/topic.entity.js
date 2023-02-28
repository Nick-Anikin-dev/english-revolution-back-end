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
exports.Topic = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const teacher_entity_1 = require("../teacher/teacher.entity");
const lesson_entity_1 = require("../lesson/lesson.entity");
let Topic = class Topic {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Primary identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Topic.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", Number)
], Topic.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entity_1.Teacher, (teacher) => teacher.topics),
    __metadata("design:type", teacher_entity_1.Teacher)
], Topic.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lesson_entity_1.Lesson, (lesson) => lesson.topic),
    __metadata("design:type", Array)
], Topic.prototype, "lessons", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Phrasal verbs", description: "Title of topic" }),
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: false
    }),
    __metadata("design:type", String)
], Topic.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Types of phrasal verbs", description: "Topic description" }),
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: true
    }),
    __metadata("design:type", String)
], Topic.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        nullable: true,
        default: '[]',
    }),
    __metadata("design:type", Array)
], Topic.prototype, "files", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Topic.prototype, "created_at", void 0);
Topic = __decorate([
    (0, typeorm_1.Entity)({ name: "topics" })
], Topic);
exports.Topic = Topic;
//# sourceMappingURL=topic.entity.js.map
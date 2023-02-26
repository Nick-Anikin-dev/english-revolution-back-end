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
exports.Homework = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const lesson_entity_1 = require("../lesson/lesson.entity");
let Homework = class Homework {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Primary identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Homework.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => lesson_entity_1.Lesson, (lesson) => lesson.homework),
    __metadata("design:type", lesson_entity_1.Lesson)
], Homework.prototype, "lesson", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true
    }),
    __metadata("design:type", String)
], Homework.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        nullable: true,
        default: '[]',
    }),
    __metadata("design:type", Array)
], Homework.prototype, "files", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        nullable: true,
        default: null,
    }),
    __metadata("design:type", Object)
], Homework.prototype, "review", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        nullable: true,
        default: null,
    }),
    __metadata("design:type", Object)
], Homework.prototype, "fixes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true
    }),
    __metadata("design:type", String)
], Homework.prototype, "mark", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Homework.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Homework.prototype, "updated_at", void 0);
Homework = __decorate([
    (0, typeorm_1.Entity)({ name: "homeworks" })
], Homework);
exports.Homework = Homework;
//# sourceMappingURL=homework.entity.js.map
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lesson_entity_1 = require("./lesson.entity");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("../student/student.entity");
const teacher_entity_1 = require("../teacher/teacher.entity");
const roles_enum_1 = require("../constants/roles/roles.enum");
let LessonService = class LessonService {
    constructor(lessonRepository, studentRepository, teacherRepository) {
        this.lessonRepository = lessonRepository;
        this.studentRepository = studentRepository;
        this.teacherRepository = teacherRepository;
    }
    async getLessonDetails(user, id) {
        const lesson = await this.lessonRepository.findOne({ where: { id }, relations: ['teacher', 'student'] });
        if (!lesson) {
            throw new common_1.NotFoundException(`Failed to find lesson with id: ${id}`);
        }
        switch (user.role) {
            case roles_enum_1.RolesEnum.STUDENT:
                if (lesson.student.user_id != user.id) {
                    throw new common_1.ForbiddenException(`Failed to get lesson details`);
                }
                break;
            case roles_enum_1.RolesEnum.TEACHER:
                if (lesson.teacher.user_id != user.id) {
                    throw new common_1.ForbiddenException(`Failed to get lesson details`);
                }
                break;
        }
        return lesson;
    }
    async createLesson(user, createLessonDto) {
        const { student_id } = createLessonDto, partial = __rest(createLessonDto, ["student_id"]);
        const student = await this.studentRepository.findOne({ where: { id: student_id } });
        if (!student) {
            throw new common_1.NotFoundException(`Failed to find student with id: ${student_id}`);
        }
        const teacher = await this.teacherRepository.findOne({ where: { user_id: user.id } });
        if (!teacher) {
            throw new common_1.ForbiddenException(`Failed to create lesson`);
        }
        const new_lesson = this.lessonRepository.create(Object.assign(Object.assign({}, partial), { student, teacher }));
        return await this.lessonRepository.save(new_lesson);
    }
    async updateLesson(user, id, updateLessonDto) {
        const lesson = await this.lessonRepository.findOne({ where: { id }, relations: ["teacher"] });
        if (!lesson) {
            throw new common_1.NotFoundException(`Failed to find lesson with id: ${id}`);
        }
        if (lesson.teacher.user_id !== user.id) {
            throw new common_1.ForbiddenException(`Failed to update lesson`);
        }
        const { student_id } = updateLessonDto, partial = __rest(updateLessonDto, ["student_id"]);
        if (student_id) {
            const student = await this.studentRepository.findOne({ where: { id: student_id } });
            if (!student) {
                throw new common_1.NotFoundException(`Failed to find student with id: ${student_id}`);
            }
            return await this.lessonRepository.update({ id }, Object.assign(Object.assign({}, partial), { student }));
        }
        return await this.lessonRepository.update({ id }, partial);
    }
    async deleteLesson(user, id) {
        const lesson = await this.lessonRepository.findOne({ where: { id }, relations: ["teacher"] });
        if (!lesson) {
            throw new common_1.NotFoundException(`Failed to find lesson with id: ${id}`);
        }
        if (lesson.teacher.user_id != user.id) {
            throw new common_1.ForbiddenException(`Failed to remove lesson`);
        }
        return await this.lessonRepository.softDelete({ id });
    }
};
LessonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lesson_entity_1.Lesson)),
    __param(1, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __param(2, (0, typeorm_1.InjectRepository)(teacher_entity_1.Teacher)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], LessonService);
exports.LessonService = LessonService;
//# sourceMappingURL=lesson.service.js.map
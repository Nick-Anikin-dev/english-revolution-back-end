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
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const teacher_entity_1 = require("./teacher.entity");
const roles_enum_1 = require("../constants/roles/roles.enum");
const user_entity_1 = require("../user/user.entity");
const s_hool_entity_1 = require("../school/s\u0441hool.entity");
let TeacherService = class TeacherService {
    constructor(teacherRepository, schoolsRepository, userRepository) {
        this.teacherRepository = teacherRepository;
        this.schoolsRepository = schoolsRepository;
        this.userRepository = userRepository;
    }
    async getTeachers(user) {
        const school = await this.schoolsRepository.findOne({
            where: {
                user_id: user.id
            }
        });
        return await this.teacherRepository.find({
            where: {
                school: {
                    id: school.id
                }
            }
        });
    }
    async createTeacher(user_id) {
        const new_teacher = this.teacherRepository.create({ user_id });
        return await this.teacherRepository.save(new_teacher);
    }
    async getTeacherById(id) {
        const teacher = await this.teacherRepository.findOne({ where: { id } });
        if (!teacher) {
            throw new common_1.NotFoundException(`Failed to find teacher with id: ${id}`);
        }
        return teacher;
    }
    async getTeacherByUserId(user_id) {
        const teacher = await this.teacherRepository.findOne({ where: { user_id } });
        if (!teacher) {
            throw new common_1.NotFoundException(`Failed to find teacher with user_id: ${user_id}`);
        }
        return teacher;
    }
    async findTeachersByUsername(username) {
        return await this.userRepository.find({
            select: ['id', 'user_role_id', 'username', 'first_name', 'last_name', 'email'],
            where: { username: (0, typeorm_2.ILike)(`%${username}%`), role_type: roles_enum_1.RolesEnum.TEACHER }
        });
    }
};
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(teacher_entity_1.Teacher)),
    __param(1, (0, typeorm_1.InjectRepository)(s_hool_entity_1.School)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TeacherService);
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map
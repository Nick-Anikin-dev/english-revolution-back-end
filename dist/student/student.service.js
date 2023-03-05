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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const student_entity_1 = require("./student.entity");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/user.entity");
const roles_enum_1 = require("../constants/roles/roles.enum");
const teacher_entity_1 = require("../teacher/teacher.entity");
const s_hool_entity_1 = require("../school/s\u0441hool.entity");
let StudentService = class StudentService {
    constructor(studentRepository, teacherRepository, schoolRepository, userRepository) {
        this.studentRepository = studentRepository;
        this.teacherRepository = teacherRepository;
        this.schoolRepository = schoolRepository;
        this.userRepository = userRepository;
    }
    async getStudents(user) {
        if (user.role === roles_enum_1.RolesEnum.TEACHER) {
            return await this.studentRepository
                .createQueryBuilder('student')
                .leftJoin(user_entity_1.User, 'user', `user.user_role_id = student.id AND user.role_type = '${roles_enum_1.RolesEnum.STUDENT}'`)
                .leftJoin(teacher_entity_1.Teacher, 'school', `teacher.user_id = ${user.id}`)
                .select(['student.id as id', 'first_name', 'email', 'last_name', 'username', 'user.id'])
                .orderBy('user.first_name', 'ASC')
                .getRawMany();
        }
        return await this.studentRepository
            .createQueryBuilder('student')
            .leftJoin(user_entity_1.User, 'user', `user.user_role_id = student.id AND user.role_type = '${roles_enum_1.RolesEnum.STUDENT}'`)
            .leftJoin(s_hool_entity_1.School, 'school', `school.user_id = ${user.id}`)
            .select(['student.id as id', 'first_name', 'email', 'last_name', 'username', 'user.id'])
            .orderBy('user.first_name', 'ASC')
            .getRawMany();
    }
    async getStudentById(id) {
        return await this.studentRepository.findOne({
            where: { id }
        });
    }
    async a() {
        const students = await this.studentRepository.find();
        const school = await this.schoolRepository.findOne({ where: { id: 6 } });
        return await this.studentRepository.update({ id: (0, typeorm_1.In)(students.map(s => s.id)) }, school);
    }
    async createStudent(user_id) {
        const new_student = this.studentRepository.create({ user_id });
        return await this.studentRepository.save(new_student);
    }
    async getStudentByUserId(user_id) {
        const student = await this.studentRepository.findOne({ where: { user_id }, relations: ['teacher'] });
        if (!student) {
            throw new common_1.NotFoundException(`Failed to find student with user_id: ${user_id}`);
        }
        return student;
    }
    async getStudentByIds(student_ids) {
        return await this.studentRepository.find({
            where: {
                id: (0, typeorm_1.In)(student_ids),
            },
        });
    }
    async findStudentsByUsername(user, username) {
        return await this.userRepository.find({
            select: ['id', 'user_role_id', 'username', 'first_name', 'last_name', 'email'],
            where: { username: (0, typeorm_1.ILike)(`%${username}%`), role_type: roles_enum_1.RolesEnum.STUDENT },
        });
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(student_entity_1.Student)),
    __param(1, (0, typeorm_2.InjectRepository)(teacher_entity_1.Teacher)),
    __param(2, (0, typeorm_2.InjectRepository)(s_hool_entity_1.School)),
    __param(3, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map
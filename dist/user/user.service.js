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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const roles_enum_1 = require("../constants/roles/roles.enum");
const school_service_1 = require("../school/school.service");
const teacher_service_1 = require("../teacher/teacher.service");
const student_service_1 = require("../student/student.service");
let UsersService = class UsersService {
    constructor(userRepository, studentService, teacherService, schoolService) {
        this.userRepository = userRepository;
        this.studentService = studentService;
        this.teacherService = teacherService;
        this.schoolService = schoolService;
    }
    async getAllUsers() {
        const users = await this.userRepository.find();
        return await Promise.all(users.map(async (user) => {
            let user_role;
            switch (user.role_type) {
                case roles_enum_1.RolesEnum.STUDENT:
                    user_role = await this.studentService.getStudentByUserId(user.id);
                    return Object.assign(Object.assign({}, user), { user_role });
                case roles_enum_1.RolesEnum.TEACHER:
                    user_role = await this.teacherService.getTeacherByUserId(user.id);
                    return Object.assign(Object.assign({}, user), { user_role });
                case roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN:
                    user_role = await this.schoolService.getSchoolByUserId(user.id);
                    return Object.assign(Object.assign({}, user), { user_role });
            }
        }));
    }
    async getUserById(id) {
        return await this.userRepository.findOne({
            select: [
                'id', 'user_role_id', 'first_name', 'last_name', 'role_type', 'username', 'email',
            ],
            where: { id },
        });
    }
    async getUserRoleDetails(user) {
        switch (user.role) {
            case roles_enum_1.RolesEnum.STUDENT:
                return await this.studentService.getStudentByUserId(user.id);
            case roles_enum_1.RolesEnum.TEACHER:
                return await this.teacherService.getTeacherByUserId(user.id);
            case roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN:
                return await this.schoolService.getSchoolByUserId(user.id);
        }
    }
    async createUser(dto) {
        const new_user = await this.userRepository.create(dto);
        const _a = await this.userRepository.save(new_user), { password } = _a, user = __rest(_a, ["password"]);
        const new_user_role = await this.createUserRole(dto.role_type, user.id);
        await this.userRepository.update({ id: user.id }, {
            user_role_id: new_user_role.id,
        });
        return Object.assign(Object.assign({}, user), { user_role_id: new_user_role.id });
    }
    async createUserRole(role_type, user_id) {
        switch (role_type) {
            case roles_enum_1.RolesEnum.STUDENT:
                return await this.studentService.createStudent(user_id);
            case roles_enum_1.RolesEnum.TEACHER:
                return await this.teacherService.createTeacher(user_id);
            case roles_enum_1.RolesEnum.SCHOOL_SUPER_ADMIN:
                return await this.schoolService.createSchool(user_id);
            default:
                return await this.studentService.createStudent(user_id);
        }
    }
    async getUserByEmail(email) {
        return await this.userRepository.findOne({ where: { email } });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        student_service_1.StudentService,
        teacher_service_1.TeacherService,
        school_service_1.SchoolService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map
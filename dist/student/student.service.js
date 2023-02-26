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
let StudentService = class StudentService {
    constructor(studentRepository, userRepository) {
        this.studentRepository = studentRepository;
        this.userRepository = userRepository;
    }
    async createStudent(user_id) {
        const new_student = this.studentRepository.create({ user_id });
        return await this.studentRepository.save(new_student);
    }
    async getStudentByUserId(user_id) {
        return await this.studentRepository.findOne({ where: { user_id } });
    }
    async findStudentsByUsername(username) {
        const users = await this.userRepository.find({
            where: { username: (0, typeorm_1.ILike)(username), role_type: roles_enum_1.RolesEnum.STUDENT }
        });
        return users;
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(student_entity_1.Student)),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map
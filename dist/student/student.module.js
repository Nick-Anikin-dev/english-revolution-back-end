"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("./student.entity");
const student_controller_1 = require("./student.controller");
const student_service_1 = require("./student.service");
const user_entity_1 = require("../user/user.entity");
const auth_module_1 = require("../auth/auth.module");
const teacher_entity_1 = require("../teacher/teacher.entity");
const s_hool_entity_1 = require("../school/s\u0441hool.entity");
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => auth_module_1.AuthModule), typeorm_1.TypeOrmModule.forFeature([student_entity_1.Student, user_entity_1.User, teacher_entity_1.Teacher, s_hool_entity_1.School])],
        controllers: [student_controller_1.StudentController],
        providers: [student_service_1.StudentService],
        exports: [student_service_1.StudentService]
    })
], StudentModule);
exports.StudentModule = StudentModule;
//# sourceMappingURL=student.module.js.map
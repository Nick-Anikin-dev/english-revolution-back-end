"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const s_hool_entity_1 = require("./s\u0441hool.entity");
const school_controller_1 = require("./school.controller");
const school_service_1 = require("./school.service");
const user_entity_1 = require("../user/user.entity");
const auth_module_1 = require("../auth/auth.module");
const teacher_module_1 = require("../teacher/teacher.module");
const student_module_1 = require("../student/student.module");
const teacher_entity_1 = require("../teacher/teacher.entity");
let SchoolModule = class SchoolModule {
};
SchoolModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            typeorm_1.TypeOrmModule.forFeature([s_hool_entity_1.School, user_entity_1.User, teacher_entity_1.Teacher, s_hool_entity_1.School]),
            student_module_1.StudentModule,
            teacher_module_1.TeacherModule
        ],
        controllers: [school_controller_1.SchoolController],
        providers: [school_service_1.SchoolService],
        exports: [school_service_1.SchoolService],
    })
], SchoolModule);
exports.SchoolModule = SchoolModule;
//# sourceMappingURL=school.module.js.map
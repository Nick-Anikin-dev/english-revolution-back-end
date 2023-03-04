"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const file_module_1 = require("./files/file.module");
const database_config_1 = require("./config/database.config");
const config_1 = require("@nestjs/config");
const student_module_1 = require("./student/student.module");
const group_module_1 = require("./group/group.module");
const teacher_module_1 = require("./teacher/teacher.module");
const school_module_1 = require("./school/school.module");
const topic_module_1 = require("./topic/topic.module");
const lesson_module_1 = require("./lesson/lesson.module");
const homework_module_1 = require("./homework/homework.module");
const schedule_module_1 = require("./schedule/schedule.module");
const request_for_cooperation_module_1 = require("./request-for-cooperation/request-for-cooperation.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            database_config_1.DatabaseModule,
            auth_module_1.AuthModule,
            file_module_1.FilesModule,
            student_module_1.StudentModule,
            group_module_1.GroupModule,
            teacher_module_1.TeacherModule,
            school_module_1.SchoolModule,
            topic_module_1.TopicModule,
            lesson_module_1.LessonModule,
            homework_module_1.HomeworkModule,
            schedule_module_1.ScheduleModule,
            request_for_cooperation_module_1.RequestForCooperationModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
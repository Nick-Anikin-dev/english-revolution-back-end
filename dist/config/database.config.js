"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../user/user.entity");
const teacher_entity_1 = require("../teacher/teacher.entity");
const student_entity_1 = require("../student/student.entity");
const s_hool_entity_1 = require("../school/s\u0441hool.entity");
const group_entity_1 = require("../group/group.entity");
const lesson_entity_1 = require("../lesson/lesson.entity");
const homework_entity_1 = require("../homework/homework.entity");
const topic_entity_1 = require("../topic/topic.entity");
var Env;
(function (Env) {
    Env["prod"] = "production";
    Env["dev"] = "development";
    Env["test"] = "testing";
})(Env || (Env = {}));
function getDbConfig(configService, entities) {
    const env = configService.get("NODE_ENV");
    switch (env) {
        case Env.prod:
            return {
                url: 'postgres://yyjcwzqeqbadmj:6c4f517eda35bf35ed6571a4e7603f6a428061404aba7792a37216a9377ed268@ec2-52-30-75-37.eu-west-1.compute.amazonaws.com:5432/d6ojpm6kj8r5jl',
                synchronize: false,
                type: configService.get("DB_TYPE"),
                host: configService.get("DB_HOST"),
                username: configService.get("DB_USERNAME"),
                password: configService.get("DB_PASSWORD"),
                database: configService.get("DB_DATABASE"),
                entities,
                migrations: [__dirname + "/migrations/*.ts"],
                migrationsTableName: "migrations"
            };
        default:
            return {
                url: 'postgres://yyjcwzqeqbadmj:6c4f517eda35bf35ed6571a4e7603f6a428061404aba7792a37216a9377ed268@ec2-52-30-75-37.eu-west-1.compute.amazonaws.com:5432/d6ojpm6kj8r5jl',
                synchronize: true,
                type: configService.get("DB_TYPE"),
                port: configService.get("DB_PORT"),
                host: configService.get("DB_HOST"),
                username: configService.get("DB_USERNAME"),
                password: configService.get("DB_PASSWORD"),
                database: configService.get("DB_DATABASE"),
                entities,
                ssl: {
                    rejectUnauthorized: false
                },
                migrations: [__dirname + "/migrations/*.ts"],
                migrationsTableName: "migrations"
            };
    }
}
exports.DatabaseModule = typeorm_1.TypeOrmModule.forRootAsync({
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (configService) => getDbConfig(configService, [
        user_entity_1.User,
        student_entity_1.Student,
        group_entity_1.Group,
        teacher_entity_1.Teacher,
        s_hool_entity_1.School,
        lesson_entity_1.Lesson,
        homework_entity_1.Homework,
        topic_entity_1.Topic
    ])
});
//# sourceMappingURL=database.config.js.map
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { User } from "../user/user.entity";

import { Teacher } from "../teacher/teacher.entity";
import { Student } from "../student/student.entity";
import { School } from "../school/sсhool.entity";
import { Group } from "../group/group.entity";
import { Lesson } from "../lesson/lesson.entity";
import { Homework } from "../homework/homework.entity";
import { Topic } from "../topic/topic.entity";

enum Env {
  prod = "production",
  dev = "development",
  test = "testing",
}

function getDbConfig(
  configService: ConfigService,
  entities: any[]
): PostgresConnectionOptions {
  const env = configService.get<Env>("NODE_ENV");

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
        migrations: [ __dirname + "/migrations/*.ts" ],
        migrationsTableName: "migrations"
      };
    default:
      return {
        url: 'postgres://yyjcwzqeqbadmj:6c4f517eda35bf35ed6571a4e7603f6a428061404aba7792a37216a9377ed268@ec2-52-30-75-37.eu-west-1.compute.amazonaws.com:5432/d6ojpm6kj8r5jl',
        synchronize: true,
        type: configService.get("DB_TYPE"),
        port: configService.get<number>("DB_PORT"),
        host: configService.get("DB_HOST"),
        username: configService.get("DB_USERNAME"),
        password: configService.get("DB_PASSWORD"),
        database: configService.get("DB_DATABASE"),
        entities,
        ssl: {
          rejectUnauthorized: false
        },
        migrations: [ __dirname + "/migrations/*.ts" ],
        migrationsTableName: "migrations"
      };
  }
}

export const DatabaseModule = TypeOrmModule.forRootAsync({
  imports: [ ConfigModule ],
  inject: [ ConfigService ],
  useFactory: (configService: ConfigService) =>
    getDbConfig(configService, [
      User,
      Student,
      Group,
      Teacher,
      School,
      Lesson,
      Homework,
      Topic
    ])
});

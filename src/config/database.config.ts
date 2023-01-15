import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from "../user/user.model";
import { Role } from "../roles/roles.model";

enum Env {
    prod = 'production',
    dev = 'development',
    test = 'testing',
}

function getDbConfig(
    configService: ConfigService,
    entities: any[],
): PostgresConnectionOptions {
    const env = configService.get<Env>('NODE_ENV');

    switch (env) {
        case Env.prod:
            return {
                synchronize: false,
                type: configService.get('DB_TYPE'),
                host: configService.get('DB_HOST'),
                username: configService.get('DB_USER'),
                password: configService.get('DB_PASS'),
                database: configService.get('DB_NAME'),
                entities,
                migrations: [__dirname + '/migrations/*.ts'],
                migrationsTableName: 'migrations',
            };
        default:
            return {
                synchronize: true,
                type: configService.get('DB_TYPE'),
                port: configService.get<number>('DB_PORT'),
                host: configService.get('DB_HOST'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_DATABASE'),
                entities,
                migrations: [__dirname + '/migrations/*.ts'],
                migrationsTableName: 'migrations',
            };
    }
}

export const DatabaseModule = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) =>
        getDbConfig(configService, [
            User,
            Role
        ]),
});

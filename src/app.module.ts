import { Module } from '@nestjs/common';
import { AuthModule } from "./auth/auth.module";
import { FilesModule } from "./files/file.module";
import { DatabaseModule } from "./config/database.config";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }),DatabaseModule, AuthModule, FilesModule],
})
export class AppModule {}

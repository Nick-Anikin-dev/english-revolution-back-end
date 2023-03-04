import { Module } from '@nestjs/common';
import { RequestForCooperationController } from './request-for-cooperation.controller';
import { RequestForCooperationService } from './request-for-cooperation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestForCooperation } from './request-for-cooperation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RequestForCooperation])],
  controllers: [RequestForCooperationController],
  providers: [RequestForCooperationService],
  exports: [RequestForCooperationService],
})
export class RequestForCooperationModule {}

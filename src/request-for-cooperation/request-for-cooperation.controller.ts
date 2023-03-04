import { Controller, Get, Patch, Post } from '@nestjs/common';
import { RequestForCooperationService } from './request-for-cooperation.service';

@Controller('cooperation')
export class RequestForCooperationController {
  constructor(private readonly requestForCooperationService: RequestForCooperationService) {
  }

  @Get()
  async getRequestsForCooperation() {
    return await this.requestForCooperationService.getRequestsForCooperation();
  }

  @Post()
  async createRequestForCooperation() {
    return await this.requestForCooperationService.createRequestForCooperation();
  }

  @Patch()
  async updateRequestForCooperation() {
    return await this.requestForCooperationService.updateRequestForCooperation();
  }
}

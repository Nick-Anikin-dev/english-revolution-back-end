import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestForCooperation } from './request-for-cooperation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RequestForCooperationService {
  constructor(
    @InjectRepository(RequestForCooperation)
    private readonly requestForCooperationRepository: Repository<RequestForCooperation>) {
  }

  async getRequestsForCooperation() {
  }

  async createRequestForCooperation() {
  }

  async updateRequestForCooperation() {
  }
}

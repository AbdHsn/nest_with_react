import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbl_sms_template } from './../models/entity_models/tbl_sms_template';

@Injectable()
export class SmsTemplateService {
  constructor(
    @InjectRepository(tbl_sms_template)
    private smsTempleteRepo: Repository<tbl_sms_template>,
  ) {}

  async getAll(): Promise<tbl_sms_template[]> {
    try {
      return this.smsTempleteRepo.find();
    } catch (error) {
      throw error;
    }
  }
}

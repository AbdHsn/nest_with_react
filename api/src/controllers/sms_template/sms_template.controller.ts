import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { SmsTemplateService } from '../../services/sms_template.service';
import { tbl_sms_template } from './../../models/entity_models/tbl_sms_template';

@Controller('sms-template')
export class SmsTemplateController {
  constructor(public smsTempleteSrv: SmsTemplateService) {}

  @Get()
  async getAll(): Promise<tbl_sms_template[]> {
    return this.smsTempleteSrv.getAll();
  }
}

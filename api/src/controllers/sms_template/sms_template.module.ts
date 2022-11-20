import { Module } from '@nestjs/common';
import { SmsTemplateService } from 'src/services/sms_template.service';
import { SmsTemplateController } from './sms_template.controller';

@Module({
  imports: [],
  controllers: [SmsTemplateController],
  providers: [SmsTemplateService],
})
export class SmsTemplateModule {}

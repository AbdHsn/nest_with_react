import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrmConfig from './configurations/orm_config';
import { SmsTemplateModule } from './controllers/sms_template/sms_template.module';

@Module({
  imports: [SmsTemplateModule, TypeOrmModule.forRoot(OrmConfig)],
})
export class AppModule {}

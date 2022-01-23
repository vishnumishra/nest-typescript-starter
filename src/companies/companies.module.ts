import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { Company } from './entities/company.entity';

@Module({
  imports: [SequelizeModule.forFeature([Company])],
  controllers: [CompaniesController],
  providers: [CompaniesService]
})
export class CompaniesModule {}

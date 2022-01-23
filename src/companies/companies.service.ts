import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company)
    private companyModel: typeof Company,
  ) { }

  create(createCompanyDto: CreateCompanyDto) {
    return this.companyModel.create({
      name: createCompanyDto.name,
      address: createCompanyDto.address,
      ceo: createCompanyDto.ceo,
      email: createCompanyDto.email,
      inceptionDate: createCompanyDto.inceptionDate,
    });
  }

  findAll(name: string) {
    return this.companyModel.findAll({ where: { name } });
  }

  findOne(id: string) {
    return this.companyModel.findOne({ where: { id } });
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}

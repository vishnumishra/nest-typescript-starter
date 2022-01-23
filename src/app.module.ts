import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CompaniesModule } from './companies/companies.module';
import { TeamsModule } from './teams/teams.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './companies/entities/company.entity';
import { Team } from './teams/entities/team.entity';
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
  }),
  SequelizeModule.forRoot({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    autoLoadModels: true,
    synchronize: true,
    retryAttempts: 1,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    models: [Company, Team],
  }),
    CompaniesModule, TeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

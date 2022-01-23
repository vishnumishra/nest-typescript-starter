import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
  }),
  SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
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
export class AppModule {}

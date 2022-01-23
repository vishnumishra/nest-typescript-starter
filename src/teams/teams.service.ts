import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team)
    private teamModel: typeof Team,
  ) { }
  create(createTeamDto: CreateTeamDto) {
    return this.teamModel.create({
      companyId: createTeamDto.companyId,
      teamleadName: createTeamDto.teamleadName
    });
  }

  findAll(teamlead: string) {
    return this.teamModel.findAll({ where: { teamleadName: teamlead } });
  }

  findOne(id: string) {
    return this.teamModel.findOne({ where: { id } });
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}

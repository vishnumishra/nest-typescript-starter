import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, UseGuards } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) { }

  @UseGuards(JwtAuthGuard)
  @Post('company/:id')
  @HttpCode(202)
  create(@Body() createTeamDto: CreateTeamDto, @Param('id') id: string) {
    createTeamDto.companyId = id;
    return this.teamsService.create(createTeamDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query('teamlead') teamlead: string) {
    return this.teamsService.findAll(teamlead);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(id);
  }
}

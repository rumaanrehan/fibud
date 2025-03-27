import { Controller, Post, Body } from '@nestjs/common';
import { MatchesService } from './app.service';
import { CreateMatchDto } from 'dto/create-match.dto';
import {  Get, Query } from '@nestjs/common';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Post()
  async create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchesService.createMatch(createMatchDto);
  }
  
  @Get()
  async findAll(
    @Query('specialization') specialization?: string,
    @Query('rating') rating?: string,
  ) {
    return this.matchesService.findAll(
      specialization,
      rating ? parseFloat(rating) : undefined,
    );
  }
}

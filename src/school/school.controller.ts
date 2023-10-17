import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { Prisma } from '@prisma/client';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  // create a new school
  @Post('/create-school')
  createSchool(@Body() newSchool: Prisma.SchoolCreateInput) {
    return this.schoolService.createSchool(newSchool);
  }

  @Post('/create-period')
  createPeriod(@Body() period: Prisma.PeriodCreateInput) {
    return this.schoolService.createPeriod({ data: period });
  }

  @Post('/create-school-year')
  createSchoolYear(@Body() schoolYear: Prisma.SchoolYearCreateInput) {
    return this.schoolService.createSchoolYear({ data: schoolYear });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolService.update(+id, updateSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolService.remove(+id);
  }
}

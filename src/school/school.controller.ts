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
import { Prisma } from '@prisma/client';
import { CreateClassroomDto } from './dto/create-classroom.dto';

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

  @Post('/create-teacher')
  createTeacher(@Body() teacher: Prisma.UserCreateInput) {
    return this.schoolService.createProfesor({ data: teacher });
  }

  @Post('/create-subject')
  createSubject(@Body() Subject: Prisma.SubjectCreateInput) {
    return this.schoolService.createSubject({ data: Subject });
  }

  @Post('/create-classroom')
  createClassroom(@Body() classroom: CreateClassroomDto) {
    return this.schoolService.createClassroom(classroom);
  }

  @Get('/get-classroom/:id')
  classroom(@Param('id') classroomId: string) {
    return this.schoolService.getClassroom(classroomId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.schoolService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolService.remove(+id);
  }
}

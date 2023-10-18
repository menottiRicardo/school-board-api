import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GradeService } from './grade.service';
import { CreateGradeDto } from './dto/create-grade.dto';

@Controller('grade')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Post()
  create(@Body() createGradeDto: CreateGradeDto) {
    return this.gradeService.create(createGradeDto);
  }

  @Post('/many')
  createMany(@Body() createGradeDto: CreateGradeDto[]) {
    return this.gradeService.createMany(createGradeDto);
  }

  @Get('/get-grade-by-student/:id')
  findAll(@Param('id') id: string) {
    return this.gradeService.findAll(id);
  }
}

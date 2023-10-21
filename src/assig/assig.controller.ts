import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssigService } from './assig.service';
import { CreateAssigDto } from './dto/create-assig.dto';
import { UpdateAssigDto } from './dto/update-assig.dto';

@Controller('assig')
export class AssigController {
  constructor(private readonly assigService: AssigService) {}

  @Post()
  create(@Body() createAssigDto: CreateAssigDto) {
    return this.assigService.create(createAssigDto);
  }

  @Get('/get-assignment-by-classroom/:id')
  findAll() {
    return this.assigService.findAll();
  }

  @Get('/get-assignment-by-teacher/:id')
  findByProfessor(@Param('id') id: string) {
    return this.assigService.findByTeacher(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assigService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssigDto: UpdateAssigDto) {
    return this.assigService.update(+id, updateAssigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assigService.remove(+id);
  }
}

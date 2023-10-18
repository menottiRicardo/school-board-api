import { Injectable } from '@nestjs/common';
import { CreateAssigDto } from './dto/create-assig.dto';
import { UpdateAssigDto } from './dto/update-assig.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AssigService {
  constructor(private prisma: PrismaService) {}
  create(createAssigDto: CreateAssigDto) {
    return this.prisma.assignment.create({
      data: {
        name: createAssigDto.name,
        description: createAssigDto.description,
        dueDate: createAssigDto.dueDate,
        Classroom: {
          connect: { id: createAssigDto.classroomId },
        },
        professor: {
          connect: { id: createAssigDto.professorId },
        },
        Period: {
          connect: { id: createAssigDto.periodId },
        },
        Subject: {
          connect: { id: createAssigDto.subjectId },
        },
      },
    });
  }

  findAll() {
    return `This action returns all assig`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assig`;
  }

  update(id: number, updateAssigDto: UpdateAssigDto) {
    return `This action updates a #${id} assig`;
  }

  remove(id: number) {
    return `This action removes a #${id} assig`;
  }
}

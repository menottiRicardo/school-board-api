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
        classroom: {
          connect: { id: createAssigDto.classroomId },
        },
        professor: {
          connect: { id: createAssigDto.professorId },
        },
        period: {
          connect: { id: createAssigDto.periodId },
        },
        subject: {
          connect: { id: createAssigDto.subjectId },
        },
      },
    });
  }

  findAll() {
    return `This action returns all assig`;
  }

  findByTeacher(teacherId: string) {
    return this.prisma.assignment.findMany({
      where: {
        professorId: teacherId,
      },
      select: {
        id: true,
        subjectId: true,
        name: true,
        dueDate: true,
        description: true,
        createdAt: true,
        type: true,
        periodId: true,
        classroom: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });
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

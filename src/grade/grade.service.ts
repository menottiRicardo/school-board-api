import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GradeService {
  constructor(private prisma: PrismaService) {}
  create(newGrade: CreateGradeDto) {
    return this.prisma.grade.create({
      data: {
        assignmentId: newGrade.assignmentId,
        studentId: newGrade.studentId,
        value: newGrade.value,
      },
    });
  }

  createMany(grades: CreateGradeDto[]) {
    const data: any = grades.map((grade) => ({
      assignmentId: grade.assignmentId,
      studentId: grade.studentId,
      value: grade.value,
    }));
    return this.prisma.grade.createMany({
      data,
    });
  }

  findAll(id: string) {
    return this.prisma.grade.findMany({
      where: {
        studentId: id,
      },
    });
  }
}

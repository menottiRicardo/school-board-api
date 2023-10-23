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

  async createMany(grades: CreateGradeDto[]) {
    // separe the grades with id
    const data = [];

    grades.forEach(async (grade) => {
      if (grade.id == null) {
        data.push({
          assignmentId: grade.assignmentId,
          studentId: grade.studentId,
          value: grade.value,
        });
      } else {
        console.log('here', grade);
        await this.prisma.grade.update({
          where: {
            id: grade.id,
          },
          data: {
            assignmentId: grade.assignmentId,
            studentId: grade.studentId,
            value: grade.value,
          },
        });
      }
    });
    if (data) {
      await this.prisma.grade.createMany({
        data,
      });
    }
    return;
  }

  findAll(id: string) {
    return this.prisma.grade.findMany({
      where: {
        studentId: id,
      },
    });
  }
}

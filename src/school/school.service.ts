import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}
  createSchool(newSchool: Prisma.SchoolCreateInput) {
    // do some validation
    return this.prisma.school.create({ data: newSchool });
  }

  createPeriod(newPeriod: Prisma.PeriodCreateArgs) {
    // do some validation
    return this.prisma.period.create(newPeriod);
  }

  createSchoolYear(newSchoolYear: Prisma.SchoolYearCreateArgs) {
    // do some validation
    if (newSchoolYear.data.schoolId == null) {
      throw new Error('School id is required');
    }
    return this.prisma.schoolYear.create(newSchoolYear);
  }

  createProfesor(newProf: Prisma.UserCreateArgs) {
    // do some validation

    return this.prisma.user.create(newProf);
  }

  createSubject(newSubject: Prisma.SubjectCreateArgs) {
    // do some validation
    return this.prisma.subject.create(newSubject);
  }

  createClassroom(newClassroom: Prisma.ClassroomCreateArgs) {
    // do some validation

    console.log('tee', JSON.stringify(newClassroom));
    return this.prisma.classroom.create({
      data: {
        name: newClassroom.data.name,
        schoolYearId: newClassroom.data.schoolYearId,
        Users: {
          connect: {
            // @ts-ignore
            id: newClassroom.data.teacherId,
          },
        },
        subjects: {
          // @ts-ignore
          connect: newClassroom.data.subjects,
        },
      },
    });
  }

  getClassroom(id: string) {
    return this.prisma.classroom.findUnique({
      where: { id: id },
      include: {
        Users: true,
        subjects: true,
      },
    });
  }

  findAll() {
    return `This action returns all school`;
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}

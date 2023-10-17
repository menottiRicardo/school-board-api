import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';

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

  createClassroom(newClassroom: CreateClassroomDto) {
    // do some validation
    return this.prisma.classroom.create({
      data: {
        name: newClassroom.name,
        schoolYearId: newClassroom.schoolYearId,
        Users: {
          connect: {
            id: newClassroom.teacherId,
          },
        },
        subjects: {
          connect: newClassroom.subjects,
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

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

  createSchoolYear(newSchoolYear: Prisma.SchoolYearCreateArgs) {
    if (newSchoolYear.data.schoolId == null) {
      throw new Error('School id is required');
    }
    return this.prisma.schoolYear.create(newSchoolYear);
  }

  createPeriod(newPeriod: Prisma.PeriodCreateArgs) {
    return this.prisma.period.create(newPeriod);
  }

  createProfesor(newProf: Prisma.UserCreateArgs) {
    return this.prisma.user.create(newProf);
  }

  createSubject(newSubject: Prisma.SubjectCreateArgs) {
    return this.prisma.subject.create(newSubject);
  }

  createClassroom(newClassroom: CreateClassroomDto) {
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
      },
    });
  }

  getClassroomsByTeacher(teacherId: string) {
    return this.prisma.classroom.findMany({
      where: {
        subjects: {
          some: {
            teacherId: teacherId,
          },
        },
      },
      include: {
        subjects: true,
      },
    });
  }

  getClassrooms(schoolYearId: string) {
    return this.prisma.classroom.findMany({
      where: { schoolYearId },
      include: {
        Users: true,
      },
    });
  }

  getSubject(id: string) {
    return this.prisma.subject.findUnique({
      where: { id: id },
    });
  }

  getSubjectsByTeacher(teacherId: string) {
    return this.prisma.subject.findMany({
      where: { teacherId },
    });
  }

  getTeacher(id: string) {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  getPeriods(schoolYearId: string) {
    return this.prisma.period.findMany({
      where: { schoolYearId: schoolYearId },
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

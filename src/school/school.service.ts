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

  createSchoolYear(newSchoolYear: Prisma.AcademicYearCreateArgs) {
    if (newSchoolYear.data.schoolId == null) {
      throw new Error('School id is required');
    }
    return this.prisma.academicYear.create(newSchoolYear);
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
        teacherId: newClassroom.teacherId,
        academicYear: {
          connect: {
            id: newClassroom.academicYearId,
          },
        },
      },
    });
  }

  getClassroom(id: string) {
    return this.prisma.classroom.findUnique({
      where: { id: id },
      include: {
        users: true,
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
      where: { academicYearId: schoolYearId },
      include: {
        users: true,
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
      where: {
        teacherId,
      },
    });
  }

  getTeacher(id: string) {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  getPeriods(schoolYearId: string) {
    return this.prisma.period.findMany({
      where: { academicYearId: schoolYearId },
    });
  }

  getStudentsByClassroom({ classroomId, periodId, subjectId }) {
    const data = this.prisma.user.findMany({
      where: {
        classroom: {
          some: {
            id: classroomId,
          },
        },
        // subjects: {
        //   some: {
        //     id: subjectId,
        //   },
        // },
      },
      select: {
        id: true,
        name: true,
        lastname: true,
        grades: {
          where: {
            Assignment: {
              classroomId: classroomId,
              subjectId: subjectId,
              periodId: periodId,
            },
          },
          select: {
            value: true,
            createdAt: true,
            updatedAt: true,
            assignmentId: true,
            id: true,
          },
        },
      },
    });
    return data;
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

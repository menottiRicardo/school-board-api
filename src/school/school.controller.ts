import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SchoolService } from './school.service';
import { Prisma } from '@prisma/client';
import { CreateClassroomDto } from './dto/create-classroom.dto';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  // create a new school
  @Post('/create-school')
  createSchool(@Body() newSchool: Prisma.SchoolCreateInput) {
    return this.schoolService.createSchool(newSchool);
  }

  @Post('/create-period')
  createPeriod(@Body() period: Prisma.PeriodCreateInput) {
    return this.schoolService.createPeriod({ data: period });
  }

  @Post('/create-school-year')
  createSchoolYear(@Body() schoolYear: Prisma.AcademicYearCreateInput) {
    return this.schoolService.createSchoolYear({ data: schoolYear });
  }

  @Post('/create-teacher')
  createTeacher(@Body() teacher: Prisma.UserCreateInput) {
    return this.schoolService.createProfesor({ data: teacher });
  }

  @Post('/create-subject')
  createSubject(@Body() Subject: any) {
    return this.schoolService.createSubject({
      data: {
        subjectName: Subject.subjectName,
        teacher: {
          connect: {
            // @ts-ignore
            id: Subject.teacherId,
          },
        },
        academicYear: {
          connect: {
            // @ts-ignore
            id: Subject.academicYearId,
          },
        },
        classrooms: {
          connect: Subject.classrooms,
        },
      },
    });
  }

  @Post('/create-classroom')
  createClassroom(@Body() classroom: CreateClassroomDto) {
    return this.schoolService.createClassroom(classroom);
  }

  @Get('/classroom/:id')
  classrooms(@Param('id') classroomId: string) {
    return this.schoolService.getClassroom(classroomId);
  }

  @Get('/classrooms-by-teacher/:id')
  classroomByTeacher(@Param('id') teacherId: string) {
    return this.schoolService.getClassroomsByTeacher(teacherId);
  }

  @Get('/classrooms/:id')
  classroom(@Param('id') schoolYearId: string) {
    return this.schoolService.getClassrooms(schoolYearId);
  }

  @Get('/teacher/:id')
  teachers(@Param('id') teacher: string) {
    return this.schoolService.getTeacher(teacher);
  }

  @Post('/students/by-classroom')
  studentsByClassroom(@Body() data: any) {
    return this.schoolService.getStudentsByClassroom(data);
  }

  @Get('/subject/:id')
  subjects(@Param('id') subjectId: string) {
    return this.schoolService.getSubject(subjectId);
  }

  @Get('/subjects-by-teacher/:id')
  subjectsByTeacher(@Param('id') teacherId: string) {
    return this.schoolService.getSubjectsByTeacher(teacherId);
  }

  @Get('/periods/:id')
  periods(@Param('id') schoolYearId: string) {
    return this.schoolService.getPeriods(schoolYearId);
  }
}

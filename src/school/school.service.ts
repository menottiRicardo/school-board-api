import { Injectable } from '@nestjs/common';
import { UpdateSchoolDto } from './dto/update-school.dto';
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

  findAll() {
    return `This action returns all school`;
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}

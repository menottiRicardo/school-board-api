import { Injectable } from '@nestjs/common';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}
  createSchool(newSchool: Prisma.SchoolCreateArgs) {
    // do some validation
    return this.prisma.school.create(newSchool);
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

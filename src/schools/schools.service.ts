import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { Db } from 'mongodb';
import { InjectClient } from 'nest-mongodb-driver';
@Injectable()
export class SchoolsService {
  constructor(@InjectClient() private readonly db: Db) {}
  create(createSchoolDto: CreateSchoolDto) {
    return this.db.collection('schools').insertOne(createSchoolDto);
  }

  findAll() {
    return `This action returns all schools`;
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

import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { Db, ObjectId } from 'mongodb';
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

  findOne(id: string) {
    return this.db.collection('schools').findOne({ _id: new ObjectId(id) });
  }

  update(id: string, updateSchoolDto: UpdateSchoolDto) {
    return this.db
      .collection('schools')
      .updateOne({ _id: new ObjectId(id) }, { $set: updateSchoolDto });
  }
}

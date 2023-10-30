import { Injectable } from '@nestjs/common';
import { Db } from 'mongodb';
import { InjectClient } from 'nest-mongodb-driver';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectClient() private readonly db: Db) {}

  async findOne(cid: string): Promise<User | undefined> {
    return this.db.collection('users').findOne({ cid });
  }
}

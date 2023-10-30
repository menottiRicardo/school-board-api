import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';

import { MongoDbDriverModule } from 'nest-mongodb-driver';
import { SchoolsModule } from './schools/schools.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    AuthModule,
    MongoDbDriverModule.forRoot({
      url: 'mongodb+srv://ricardo:fJeh8nrzjuNWGHTX@cluster0.lcq4hdr.mongodb.net/?retryWrites=true&w=majority',
    }),
    SchoolsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

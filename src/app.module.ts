import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GradeModule } from './grade/grade.module';
import { SchoolModule } from './school/school.module';
import { AssigModule } from './assig/assig.module';

@Module({
  imports: [GradeModule, SchoolModule, AssigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

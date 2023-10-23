import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GradeModule } from './grade/grade.module';
import { SchoolModule } from './school/school.module';
import { AssigModule } from './assig/assig.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './users/auth.guard';

@Module({
  imports: [GradeModule, SchoolModule, AssigModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}

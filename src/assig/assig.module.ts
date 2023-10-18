import { Module } from '@nestjs/common';
import { AssigService } from './assig.service';
import { AssigController } from './assig.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AssigController],
  providers: [AssigService, PrismaService],
})
export class AssigModule {}

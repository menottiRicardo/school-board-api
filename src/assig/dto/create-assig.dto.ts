import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateAssigDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  classroomId: string;

  @IsNotEmpty()
  @IsString()
  professorId: string;

  @IsNotEmpty()
  @IsString()
  periodId: string;

  @IsNotEmpty()
  @IsString()
  subjectId: string;

  @IsNotEmpty()
  @IsDateString()
  dueDate: Date;
}

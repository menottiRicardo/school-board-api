import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateGradeDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsString()
  assignmentId: string;

  @IsNotEmpty()
  @IsString()
  studentId: string;

  id: string;
}

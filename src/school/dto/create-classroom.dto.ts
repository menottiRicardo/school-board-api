import { IsNotEmpty } from 'class-validator';
export class CreateClassroomDto {
  @IsNotEmpty()
  teacherId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  academicYearId: string;
}

export interface Subject {
  id: string;
}

import { IsNotEmpty } from 'class-validator';
export class CreateClassroomDto {
  @IsNotEmpty()
  teacherId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  schoolYearId: string;

  @IsNotEmpty()
  subjects: Subject[];
}

export interface Subject {
  id: string;
}

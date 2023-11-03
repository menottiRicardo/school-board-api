export class Classroom {
  id: string;
  name: string;
  academicYearId: string;
  subjects: Subject_Classroom[];
  assignments: Assignment[];
}

export class Subject_Classroom {
  subjectId: string;
  teacherId: string;
}

export class Assignment {
  id: string;
  name: string;
  periodId: string;
  classroomId: string;
  description: string;
}

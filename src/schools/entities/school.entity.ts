export class School {
  id: string;
  name: string;
  address: string;
  city: string;
  academicYears: AcademicYear[];
}

export class AcademicYear {
  id: string;
  year: string;
  startDate: Date;
  endDate: Date;
  subjects: Subject[];
  periods: Period[];
  classrooms: Classroom[];
}

export class Period {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  academicYear: string;
  academicYearId: string;
}

export class Subject {
  id: string;
  name: string;
  teacher: string;
  teacherId: string;
}

export class Classroom {
  id: string;
  name: string;
  subjects: Subject_Classroom[];
  assignments: Assignment_Classroom[];
}

export class Subject_Classroom {
  id: string;
  subjectName: string;
  subjectId: string;
}

export class Assignment_Classroom {
  id: string;
  assignmentName: string;
  assignmentId: string;
  periodId: string;
}

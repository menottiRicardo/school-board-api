// single school collection

export class School {
  id: string;
  name: string;
  address: string;
  academicYears: AcademicYear[];
}

export class AcademicYear {
  id: string;
  year: string;
  startDate: Date;
  endDate: Date;
  periods: Period[];
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

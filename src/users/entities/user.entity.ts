export class User {
  _id: string;
  cid: string;
  password: string;
  role: string;
  schoolId: string;
}

export interface Sidebar {
  name: string;
  href?: string;
  subMenu?: { name: string; href: string }[];
}

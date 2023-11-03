import { Injectable } from '@nestjs/common';
import { Db, ObjectId } from 'mongodb';
import { InjectClient } from 'nest-mongodb-driver';
import { Sidebar } from './entities/user.entity';
import { teacherSidebar } from './contants';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectClient() private readonly db: Db) {}

  async findOne(cid: string): Promise<User | undefined> {
    return this.db.collection('users').findOne({ cid });
  }

  async createSidebar(user: User): Promise<User> {
    const sidebar: Sidebar[] = [];
    switch (user.role) {
      case 'TEACHER':
        // get classrooms
        const subjects = await this.db
          .collection('subjects')
          .find({ teachers: new ObjectId(user.userId) })
          .toArray();

        const subjectIds = subjects.map((subject) => {
          return subject._id;
        });

        const classrooms = await this.db
          .collection('classrooms')
          .find({ subjects: { $in: subjectIds } })
          .toArray();

        sidebar.push(...teacherSidebar);

        const classroomSubMenu = [];
        const gradesSubMenu = [];

        classrooms.forEach((classroom) => {
          console.log(classroom);

          classroomSubMenu.push({
            name: classroom.classroomName,
            href: `/dashboard/classrooms/${classroom._id.toString()}`,
          });
        });

        subjects.forEach((subject) => {
          console.log(subject);
          gradesSubMenu.push({
            name: subject.name,
            href: `/dashboard/grades-book/${subject._id.toString()}`,
          });
        });

        sidebar.push({
          name: 'Salones',
          subMenu: classroomSubMenu,
          icon: 'School',
        });

        sidebar.push({
          name: 'Calificaciones',
          subMenu: gradesSubMenu,
          icon: 'FileBarChart',
        });

        break;

      default:
        break;
    }
    return sidebar;
  }
}

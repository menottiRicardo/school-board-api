import { Sidebar } from './entities/user.entity';

export const teacherSidebar: Sidebar[] = [
  { name: 'Inicio', href: '/dashboard', icon: 'Home' },
  {
    name: 'Assignaciones',
    href: '/dashboard/assignments',
    icon: 'CalendarDays',
  },
  { name: 'Mensajes', href: '/dashboard/messages', icon: 'MessagesSquare' },
];

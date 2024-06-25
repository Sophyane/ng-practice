import { TaskStatus } from '../tasks/task.model';

export const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Jasmine Washington',
    avatar: 'user-1.jpg',
    tasks: [
      {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary:
          'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '08/12/2024',
        status: TaskStatus.DONE,
      },
      {
        id: 't2',
        userId: 'u1',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '13/02/2024',
        status: TaskStatus.ACTIVE,
      },
      {
        id: 't3',
        userId: 'u1',
        title: 'Prepare issue template',
        summary:
          'Prepare and describe an issue template which will help with project management',
        dueDate: '29/08/2024',
        status: TaskStatus.DONE,
      },
    ]
  },
  {
    id: 'u2',
    name: 'Emily Thompson',
    avatar: 'user-2.jpg',
  },
  {
    id: 'u3',
    name: 'Marcus Johnson',
    avatar: 'user-3.jpg',
    tasks: [
      {
        id: 't1',
        userId: 'u2',
        title: 'Confirme The lean Canvas',
        summary:
          'Silver Leanings is a company that provides a platform for people to learn new skills and improve their lives.' +
          ' The company has been around for a few years and has a good reputation.',
        dueDate: '08/12/2024',
        status: TaskStatus.DONE,
      },
    ]
  },
  {
    id: 'u4',
    name: 'David Miller',
    avatar: 'user-4.jpg',
  },
  {
    id: 'u5',
    name: 'Priya Patel',
    avatar: 'user-5.jpg',
  },
  {
    id: 'u6',
    name: 'Arjun Singh',
    avatar: 'user-6.jpg',
  },
];

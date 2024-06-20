export interface Task {
  id?: string;
  title: string;
  summary: string;
  dueDate: string;
  status: TaskStatus;
  userId: string;
}

export enum TaskStatus {
  ACTIVE = 'active',
  DONE = 'done',
}

import { Injectable, signal } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = signal<Task[]>([]) ;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if(tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  getUserTasks(userId: string) {
      const tasks = DUMMY_USERS.find(user =>
        user.id === userId)?.tasks || [];
      this.tasks.set(tasks);
      this.saveTasks()
      return tasks;
  }

  completeTask(taskId: string) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== taskId));
    this.saveTasks();
  }

addTask(task: Pick<Task, 'title' | 'summary' | 'dueDate'>, userId: string) {
    this.tasks.update(tasks => [
      ...tasks,
      {
        id: Date().toString(), ...task,
        status: TaskStatus.ACTIVE,
        userId: userId
      }
    ]);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}

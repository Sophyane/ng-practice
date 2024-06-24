import { Component, input, OnChanges, signal } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users';
import { TaskComponent } from './task/task.component';
import { Task, TaskStatus } from './task.model';
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnChanges {
  selectedUser = input<User>();
  tasks = signal<Task[]>([]);
  isAddingTask = signal<boolean>(false);

  ngOnChanges() {
    this.tasks.set(DUMMY_USERS.find(user =>
      user.id === this.selectedUser()?.id)?.tasks || []);
  }

  onCompleteTask(task: string) {
    this.tasks.update(tasks => tasks.filter(t => t.id !== task));
  }

  onStartAddTask() {
   this.isAddingTask.set(true);
  }

  onAddTask(task: Pick<Task, 'title' | 'summary' | 'dueDate'>) {
    this.tasks.update(tasks => [
      ...tasks,
      {
        id: Date().toString(), ...task,
        status: TaskStatus.ACTIVE,
        userId: this.selectedUser()?.id!
      }
    ]);
    this.isAddingTask.set(false);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }
}

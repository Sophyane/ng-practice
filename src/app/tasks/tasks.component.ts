import { Component, inject, input, OnChanges, signal } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users';
import { TaskComponent } from './task/task.component';
import { Task, TaskStatus } from './task.model';
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnChanges {
  selectedUser = input<User>();
  isAddingTask = signal<boolean>(false);
  private tasksService = inject(TasksService);
  tasks = this.tasksService.tasks;

  ngOnChanges() {
    this.tasks.set(this.tasksService.getUserTasks(this.selectedUser()?.id!));
  }

  onStartAddTask() {
   this.isAddingTask.set(true);
  }

  onAddTask(task: Pick<Task, 'title' | 'summary' | 'dueDate'>) {
    this.tasksService.addTask(task, this.selectedUser()?.id!);
    this.isAddingTask.set(false);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }
}

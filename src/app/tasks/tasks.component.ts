import { Component, input, OnChanges, signal } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users';
import { TaskComponent } from './task/task.component';
import { Task } from './task.model';
import { User } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ TaskComponent ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnChanges {
  selectedUser = input<User>();
  tasks = signal<Task[]>([]);

  ngOnChanges() {
    this.tasks.set(DUMMY_USERS.find(user =>
      user.id === this.selectedUser()?.id)?.tasks || []);
  }

  onSelectTask(task: Task) {
    console.log('Task selected: ', task);
  }
}

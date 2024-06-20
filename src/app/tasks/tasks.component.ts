import { Component, input, OnInit, output, signal } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users';
import { TaskComponent } from './task/task.component';
import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  name = input.required<string>();
  userName = output<string>();
  userId = input<string>();
  selectedUser = DUMMY_USERS.find(user =>
    user.id === this.userId());
  tasks = signal<Task[]>([]);

  ngOnInit() {
    this.tasks.set(DUMMY_USERS.find(user =>
      user.id === this.userId())?.tasks || []);
    console.log('TASKS: ',this.tasks());
    this.userName.emit(this.selectedUser?.name! ? this.selectedUser?.name : '');
  }

  onSelectTask(task: Task) {
    console.log('Task selected: ',  task);
  }

}

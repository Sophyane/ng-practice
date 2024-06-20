import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-practice';
  dummyUsers = DUMMY_USERS;
  selectedUserId = signal<string>('');

  get selectedUser() {
    return this.dummyUsers.find(user => user.id === this.selectedUserId())!;
  }

  onSelectUser(userId: string) {
    this.selectedUserId.set(userId);
  }

  onUserNameReceived(userName: string) {
    console.log('User name received: ', userName);
  }
}

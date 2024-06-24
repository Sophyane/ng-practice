import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input<User>();
  selectedUser = output<User>();

  imagePath = computed(() => 'assets/users/' + this.user()?.avatar);
  onSelectUser() {
    this.selectedUser.emit(this.user()!);
  }
}

import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [CardComponent, ReactiveFormsModule],
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input<User>();
  user2 = output<User>();
  selectedUser = output<User>();
  isSelected = input<boolean>();
  imagePath = computed(() => 'assets/users/' + this.user()?.avatar);

  onSelectUser() {
    this.selectedUser.emit(this.user()!);
  }
}

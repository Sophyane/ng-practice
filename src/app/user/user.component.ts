import { Component, computed, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './user.component.css'
})
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();
  selected = output<string>();
  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    this.selected.emit(this.name());
  }
}

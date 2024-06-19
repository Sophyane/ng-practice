import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

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
  selectedUser = DUMMY_USERS[randomIndex];
  dummyUsers = DUMMY_USERS;

}

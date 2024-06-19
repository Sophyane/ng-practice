import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title = 'My Angular App';
}

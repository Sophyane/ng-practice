import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './user/user.model';
import { CardComponent } from './shared/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountriesTableComponent } from './country/country-table/countries-table.component';
import { GlobalContainerComponent } from './containers/global-container/global-container.component';
import { devTools } from '@ngneat/elf-devtools';

devTools();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    CardComponent,
    ReactiveFormsModule,
    CountriesTableComponent,
    GlobalContainerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-practice';
  dummyUsers = DUMMY_USERS;
  selectedUser = signal<User | undefined>(undefined);

  onSelectUser(user: User) {
    this.selectedUser.set(user);
  }
}

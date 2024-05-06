import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserListComponent,
    MatButtonModule,
    Child1Component,
    Child2Component,
    HttpClientModule,
    UserComponent,
  ],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
  parentText: string = 'Text from parent';

  onChildEvent(event: string) {
    console.log('Event received from child:', event);
  }
}

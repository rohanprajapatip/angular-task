import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    {path:'home',component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'registration',component: RegistrationFormComponent},
    {path:'user-list',component: UserListComponent}
];

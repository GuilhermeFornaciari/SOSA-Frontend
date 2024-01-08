import { Routes } from '@angular/router';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { ExitsViewComponent } from './views/exits-view/exits-view.component';
import { HomeComponent } from './components/mainComponents/home/home.component';
import { ExitsComponent } from './components/mainComponents/exits/exits.component';
import { StudentsComponent } from './components/mainComponents/students/students.component';
import { ManagersComponent } from './components/mainComponents/managers/managers.component';

export const routes: Routes = [
{
  path: '',
  component: LoginViewComponent
},
{
  path: 'Main',
  component: MainViewComponent,
  children: [
    {
      path: 'Home',
      component: HomeComponent
    },
    {
      path: 'Exits',
      component: ExitsComponent
    },
    {
      path: 'Students',
      component: StudentsComponent
    },
    {
      path: 'Managers',
      component: ManagersComponent
    },
  ],
},
{
  path: 'Exits',
  component: ExitsViewComponent
}
];

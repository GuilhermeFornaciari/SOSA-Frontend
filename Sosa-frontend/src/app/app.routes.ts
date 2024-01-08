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
  path: 'login',
  component: LoginViewComponent
},
{
  path: '',
  component: MainViewComponent,
  children: [
    {
      path: 'inicial',
      component: HomeComponent
    },
    {
      path: 'saidas',
      component: ExitsComponent
    },
    {
      path: 'estudantes',
      component: StudentsComponent
    },
    {
      path: 'servidores',
      component: ManagersComponent
    },
  ],
},
{
  path: 'Exits',
  component: ExitsViewComponent
}
];

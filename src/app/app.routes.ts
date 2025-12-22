import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { LayoutComponent } from './shared/layout/app-layout/layout';
import { CalenderComponent } from './pages/calender/calender.component';

export const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path:'calendar',
        component:CalenderComponent,
        title:'Angular Calender | TailAdmin - Angular Admin Dashboard Template'
      },
       {
        path:'dashboard',
        component:DashboardComponent,
        title:''
      },
    ],
  },
];

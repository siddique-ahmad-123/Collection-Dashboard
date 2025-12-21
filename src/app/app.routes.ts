import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { LayoutComponent } from './shared/layout/app-layout/layout';

export const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: DashboardComponent }],
  },
];

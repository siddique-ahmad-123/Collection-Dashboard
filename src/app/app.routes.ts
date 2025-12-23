import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { LayoutComponent } from './shared/layout/app-layout/layout';
import { CalenderComponent } from './pages/calender/calender.component';
import { portfolioAnlysis } from './pages/portfolio/portfolioAnalysis/portfolioAnalysis';
import { autoLoanConsolidated } from './pages/portfolio/autoLoanConsolidated/autoLoanConsolidated';
import { homeLoanConsolidated } from './pages/portfolio/homeLoanConsolidated/homeLoanConsolidated';

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
      {
        path:'portfolioAnalysis',
        component:portfolioAnlysis,
        title:''
      },
      {
        path:'autoLoanConsolidated',     
        component:autoLoanConsolidated,
        title:''
      },
      {
        path:'homeLoanConsolidated',     
        component:homeLoanConsolidated,
        title:''
      },
    ],
  },
];

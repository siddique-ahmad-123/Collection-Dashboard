import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { LayoutComponent } from './shared/layout/app-layout/layout';
import { CalenderComponent } from './pages/calender/calender.component';
import { portfolioAnlysis } from './pages/portfolio/portfolioAnalysis/portfolioAnalysis';
import { autoLoanConsolidated } from './pages/portfolio/autoLoanConsolidated/autoLoanConsolidated';
import { homeLoanConsolidated } from './pages/portfolio/homeLoanConsolidated/homeLoanConsolidated';

import { EarlyWarningDashboard } from './pages/early-warning-dashboard/early-warning-dashboard';

import { AutoLoanDetailComponent } from './pages/portfolio/autoLoanConsolidated/autoLoanDetail';
import { Riskanalysis } from './pages/riskanalysis/riskanalysis';
import { Reposession } from './pages/reposession/reposession';
import { Recovery } from './pages/recovery/recovery';
import { PerformanceMonitoring } from './pages/performance-monitoring/performance-monitoring';
import { LeaderBoard } from './pages/leader-board/leader-board';
import { JlgDashboard } from './pages/jlg-dashboard/jlg-dashboard';
import { GroupLevelDashboard } from './pages/group-level-dashboard/group-level-dashboard';
import { Foreclosure } from './pages/foreclosure/foreclosure';
import { Forecasting } from './pages/forecasting/forecasting';
import { DecisionAnalytics } from './pages/decision-analytics/decision-analytics';
import { ChampionChallenger } from './pages/champion-challenger/champion-challenger';
import { AgentDashboard } from './pages/agent-dashboard/agent-dashboard';
import { homeLoanDetail } from './pages/portfolio/homeLoanConsolidated/homeLoanDetail';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'calendar',
        component: CalenderComponent,
        title: 'Angular Calender | TailAdmin - Angular Admin Dashboard Template',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: '',
      },
      {
        path: 'portfolioAnalysis',
        component: portfolioAnlysis,
        title: '',
      },
      {
        path: 'autoLoanConsolidated',
        component: autoLoanConsolidated,
        title: '',
      },
      {
        path: 'homeLoanConsolidated',
        component: homeLoanConsolidated,
        title: '',
      },
      {
        path: 'auto-loan',
        component: autoLoanConsolidated,
      },
      {
        path: 'auto-loan/:id',
        component: AutoLoanDetailComponent,
      },
      {
        path: 'Riskanalysis',
        component: Riskanalysis,
        title: '',
      },
      {
        path: 'Reposession',
        component: Reposession,
        title: '',
      },
      {
        path: 'Recovery',
        component: Recovery,
        title: '',
      },
      {
        path: 'PerformanceMonitoring',
        component: PerformanceMonitoring,
        title: '',
      },
      {
        path: 'LeaderBoard',
        component: LeaderBoard,
        title: '',
      },
      {
        path: 'JlgDashboard',
        component: JlgDashboard,
        title: '',
      },
      {
        path: 'GroupLevelDashboard',
        component: GroupLevelDashboard,
        title: '',
      },
      {
        path: 'Foreclosure',
        component: Foreclosure,
        title: '',
      },
      {
        path: 'Forecasting',
        component: Forecasting,
        title: '',
      },
      {
        path: 'DecisionAnalytics',
        component: DecisionAnalytics,
        title: '',
      },
      {
        path: 'ChampionChallenger',
        component: ChampionChallenger,
        title: '',
      },
      {
        path: 'AgentDashboard',
        component: AgentDashboard,
        title: '',
      },
      {
        path: 'homeLoanDetail/:id',
        component: homeLoanDetail,
      },
      {
        path:'EarlyWarningDashboard',     
        component:EarlyWarningDashboard,
        title:''
      },
    ],
  },
];

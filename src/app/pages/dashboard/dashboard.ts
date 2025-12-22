import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanCard } from '../../shared/component/cards/loan-card/loan-card';
import { PieChartComponent } from "../../shared/component/charts/pie-chart/pie-chart";
import { BarChartComponent } from '../../shared/component/charts/bar-chart/bar-chart';
import { DonutChartComponent } from "../../shared/component/charts/donut-chart/donut-chart";

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  imports: [LoanCard, CommonModule, PieChartComponent, BarChartComponent, DonutChartComponent],
})
export class DashboardComponent {
  productSeries = [12.8, 38.8, 10.6, 37.7];
  classificationSeries=[12,11,49,29];

  productLabels = [
    'Home Loan',
    'Personal Loan',
    'Auto Loan',
    'Credit Card'
  ];

  collectionSeries=[72.9, 27.1];
  collectionLabels=['Pending', 'Collected'];
  collectionColors=['#d46a6a', '#8e4b6d'];

  performanceSeries = [42, 58];
  performanceLabels = ['Increased', 'Decreased'];
  performanceColors = ['#1f7a1f', '#d61a1a'];

  scoreSeries=[30, 44, 26];
  scoreLabels=['>700', '500-700', '<500'];
  scoreColors=['#1f7a1f', '#43b3e6', '#d61a1a'];

  cards=[

    {
      title:'Home Loan',
      casesDone: 1123,
      totalCases: 9002,
      overdueAmount: 4290096,
      totalAmount: 30201983,
    },
   {
      title:'Auto Loan',
      casesDone: 936,
      totalCases: 8223,
      overdueAmount: 2643983,
      totalAmount: 28298238,
     
   },
   {
    title:'Personal Loan',
    casesDone: 3422,
    totalCases: 38223,
    overdueAmount: 22234992,
    totalAmount: 320271989,
   },
   {
      title:'Credit Card',
      casesDone: 3321,
      totalCases: 22312,
      overdueAmount: 19992,
      totalAmount: 128675288,
   }
  ]
}

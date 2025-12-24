import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import { CaseCardComponent } from "../../../shared/component/cards/stat-card/stat-card";
import { PieChartComponent } from "../../../shared/component/charts/pie-chart/pie-chart";
import { LineChart } from "../../../shared/component/charts/line-chart/line-chart";
import { ChartComponent } from "ng-apexcharts";

@Component({
  selector: 'app-port-folio',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, CaseCardComponent, PieChartComponent, LineChart],
  templateUrl: './portfolioAnalysis.html'
})
export class portfolioAnlysis {
HomeIcon: LucideIconData|undefined;
chartOptions: any;
onViewAll(arg0: string) {
throw new Error('Method not implemented.');
}
 productSeries = [12.8, 38.8, 10.6, 37.7];
  classificationSeries=[12,11,49,29];

  productLabels = [
    'Home Loan',
    'Personal Loan',
    'Auto Loan',
    'Credit Card'
  ];
 
}

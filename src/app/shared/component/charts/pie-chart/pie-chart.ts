import { Component, Input, ViewChild } from '@angular/core';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexLegend 
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  responsive: ApexResponsive[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './pie-chart.html',
})
export class PieChartComponent {
  @ViewChild('chart') chart!: ChartComponent;

  @Input() series: number[] = [];
  @Input() labels: string[] = [];

  chartOptions: ChartOptions = {
    series:[],
    
    chart: {
      type: 'donut',
    },
    labels: [],
    legend: {
      show: true,
      position: 'bottom',       
      horizontalAlign: 'center',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 400
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };
  
 

  ngOnChanges() {
    this.chartOptions.series = this.series;
    this.chartOptions.labels = this.labels;
  }
}




import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexDataLabels, ApexStroke, ApexLegend, ApexTooltip, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  colors: string[];
};

@Component({
  selector: 'app-line-column-bar-chart',
  imports: [ChartComponent],
  templateUrl: './line-columnBar-chart.html',

})
export class LineColumnBarChart {

  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Contribution',
          type: 'column',
          data: [230, 180, 100, 55, 70]
        },
        {
          name: 'Percentage Contribution',
          type: 'line',
          data: [9.98, 8.76, 6.23, 4.28, 3.98]
        }
      ],

      chart: {
        height: 380,
        type: 'line'
      },

      colors: ['#2196F3', '#00E396'],

      stroke: {
        width: [0, 3]
      },

      dataLabels: {
        enabled: true,
        enabledOnSeries: [1], // only on line
        formatter: (val: number) => val.toFixed(2)
      },

      xaxis: {
        categories: [
          'Fuel Type',
          'Payment',
          'Missed in Last Month',
          'Parameter 4',
          'Parameter 5'
        ]
      },

      yaxis: [
        {
          title: {
            text: 'Contribution'
          }
        },
        {
          opposite: true,
          title: {
            text: 'Percentage Contribution'
          },
          min: 0,
          max: 10
        }
      ],

      legend: {
        position: 'bottom'
      },

      tooltip: {
        shared: true,
        intersect: false
      }
    };
  }
}

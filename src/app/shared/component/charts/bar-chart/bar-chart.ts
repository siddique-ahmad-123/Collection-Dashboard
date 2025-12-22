import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexFill
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  fill: ApexFill;
};

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart.html',
})
export class BarChartComponent {
  @ViewChild('chart') chart!: ChartComponent;

  chartOptions: ChartOptions = {
    series: [
      {
        name: 'Amount',
        data: [3203, 1892, 1572, 952, 668, 402, 122]
      }
    ],
    chart: {
      type: 'bar',
      height: 280,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%',
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: 8,
      style: {
        fontSize: '12px',
        colors: ['#333']
      }
    },
    fill: {
      colors: ['#dc2626'] 
    },
    xaxis: {
      categories: [
        'Medical Expenses',
        'Gambling Expenses',
        'Liquor Expenses',
        'Shopping Expenses',
        'Others',
        'Frequent Fintech Payments',
        'Frequent Food Delivery'
      ]
    }
  };
}

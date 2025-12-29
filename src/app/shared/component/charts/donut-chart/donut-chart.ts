import { Component, Input, input, ViewChild } from '@angular/core';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexStroke
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  stroke: ApexStroke;
  colors: string[];
  responsive: ApexResponsive[];
  
};

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './donut-chart.html',
})
export class DonutChartComponent {
  @ViewChild('chart') chart!: ChartComponent;

  @Input() series:number[]=[];
  @Input() labels:string[]=[];
  @Input() colors:string[]=[];


  chartOptions: ChartOptions = {
    series:[],
    chart: {
      type: 'pie',
      toolbar: {
        show: false
      }
    },
    labels:[],
    colors: [],
    stroke: {
      width: 2,
      colors: ['#ffffff']
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        colors: ['#ffffff']
      }
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '12px',
      markers: {
        shape: 'circle'
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 220
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };

  ngOnChanges(): void{
    this.chartOptions.series = this.series;
    this.chartOptions.labels = this.labels;
    this.chartOptions.colors = this.colors;
  }
}

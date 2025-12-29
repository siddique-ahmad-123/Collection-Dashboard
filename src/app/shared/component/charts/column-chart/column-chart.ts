import { Component, Input, ViewChild, OnChanges } from '@angular/core';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexFill,
  ApexTitleSubtitle
} from 'ng-apexcharts';

export type ColumnChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};



@Component({
  selector: 'app-column-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './column-chart.html',
})
export class ColumnChartComponent implements OnChanges {
  @ViewChild('chart') chart!: ChartComponent;

 
  @Input() seriesData: number[] = [];
  @Input() categories: string[] = [];
  @Input() chartTitle = '';

  chartOptions: ColumnChartOptions = {
    series: [],

    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      formatter: (val: number) => `${val}`,
      style: {
        fontSize: '12px',
        colors: ['#304758']
      }
    },
    xaxis: {
      categories: []
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.25,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1
      }
    },
    title: {
      text: '',
      align: 'center',
      style: {
        color: '#444'
      }
    }
  };

  ngOnChanges(): void {
    
    this.chartOptions.series = [
      {
        name: this.chartTitle,
        data: [...this.seriesData]
      }
    ];

    this.chartOptions.xaxis = {
      categories: [...this.categories]
    };

    this.chartOptions.title = {
      text: this.chartTitle,
      align: 'center'
    };
  }
}

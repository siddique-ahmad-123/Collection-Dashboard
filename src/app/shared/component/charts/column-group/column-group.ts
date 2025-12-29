import { Component, Input, ViewChild, OnChanges } from '@angular/core';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexDataLabels,
  ApexStroke,
  ApexXAxis,
  ApexYAxis,
  ApexFill,
  ApexTooltip,
  ApexTitleSubtitle
} from 'ng-apexcharts';

export type ColumnGroupChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-column-group',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './column-group.html',
})
export class ColumnGroupComponent implements OnChanges {
  @ViewChild('chart') chart!: ChartComponent;

  // 🔹 Dynamic Inputs
  @Input() series: ApexAxisChartSeries = [];
  @Input() categories: string[] = [];
  @Input() title = '';

  chartOptions: ColumnGroupChartOptions= {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 6
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    fill: {
      opacity: 1
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$ ${val} thousands`
      }
    },
    title: {
      text: '',
      align: 'center'
    },
    series: [],
    xaxis: {
      categories: []
    }
  };

  ngOnChanges(): void {
    
    this.chartOptions.series = [...this.series];

    this.chartOptions.xaxis = {
      categories: [...this.categories]
    };

    this.chartOptions.title = {
      text: this.title,
      align: 'center'
    };
  }
}

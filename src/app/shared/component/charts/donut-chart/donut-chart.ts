import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexStroke
} from 'ng-apexcharts';
import { DashboardService } from '../../../../../services/dashboard-services';
import { isPlatformBrowser } from '@angular/common';

export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './donut-chart.html'
})
export class DonutChartComponent {

  @ViewChild('chart') chart!: ChartComponent;

  loading = true;
  error = false;


  public chartOptions: DonutChartOptions = {
    series: [],
    chart: {
      type: 'pie',          
      toolbar: { show: false }
    },
    labels: [],
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
      markers: { shape: 'circle' }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 220 },
          legend: { position: 'bottom' }
        }
      }
    ]
  };

  constructor(
    private dashboardService: DashboardService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadChartData();
    }
  }

  loadChartData() {
  this.dashboardService.getPieChartData().subscribe({
    next: (pieChartData) => {

      if (
        !pieChartData ||
        !Array.isArray(pieChartData.datasets) ||
        !Array.isArray(pieChartData.labels)
      ) {
        console.error('Invalid pie chart data', pieChartData);
        this.error = true;
        this.loading = false;
        return;
      }

      this.chartOptions.series = pieChartData.datasets[0].data;
      this.chartOptions.labels = pieChartData.labels;

      this.loading = false;
    },
    error: (err) => {
      console.error('Pie chart API failed', err);
      this.error = true;
      this.loading = false;
    }
  });
}

}

import { Component, Inject, PLATFORM_ID, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { DashboardService } from "../../../../../services/dashboard-services";
import { CommonModule, isPlatformBrowser } from "@angular/common";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-line-chart',
  imports: [ChartComponent,CommonModule],
  templateUrl: './line-chart.html',
  styleUrl: './line-chart.css',
})
export class LineChart {

  @ViewChild("chart") chart!: ChartComponent;


  public chartOptions: ChartOptions = {
    series: [],
    chart: {
      height: 350,
      type: "line",
      zoom: { enabled: false }
    },
    dataLabels: { enabled: false },
    stroke: { curve: "straight" },
    title: {
      text: "Recovery Trends Percentage",
      align: "left"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5
      }
    },
    xaxis: { categories: [] }
  };

  loading = true;
  error = false;

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
    this.dashboardService.getDashboardData().subscribe({
      next: (res) => {

        const lineChartData = res?.data?.lineChart;

        if (!Array.isArray(lineChartData)) {
          console.error('Line Chart data missing or invalid', res);
          this.error = true;
          this.loading = false;
          return;
        }

        this.chartOptions.series = lineChartData.map(item => ({
          name: item.name,
          data: item.data
        }));

        this.chartOptions.xaxis = {
          categories: lineChartData[0]?.categories ?? []
        };

        this.loading = false;
      },
      error: (err) => {
        console.error('API failed', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}

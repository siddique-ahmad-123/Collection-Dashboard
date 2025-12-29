import { Component, ViewChild } from "@angular/core";

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
  imports: [ChartComponent],
  templateUrl: './line-chart.html',
  styleUrl: './line-chart.css',
})
export class LineChart {

  @ViewChild("chart") chart!: ChartComponent;

    public chartOptions!: ChartOptions;
    loading = true;
    error = false;
 
constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.initializeChart();
    this.loadChartData();
  }
  initializeChart() {
    this.chartOptions = {
      series: [],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Recovery Trends Percentage",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: []
      }
      
    };
  }
  loadChartData() {
    this.dashboardService.getRecoveryTrends().subscribe({
      next:(res) => {
        this.chartOptions.series = res.series;
        this.chartOptions.xaxis = { categories: res.categories };
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    })
  }

  }





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
    public chartOptions: ChartOptions = {
      series: [
        {
          name: "Home Loan",
          data: [10, 41, 35, 51]
        },
         {
          name: "Auto Loan",
          data: [2, 49, 32, 90]
        },
        {
          name: "Personal Loan",
          data: [21, 78, 3, 50]
        },
        {
          name: "Credit Card",
          data: [31, 4, 35, 34]
        }
      ],
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
        categories: [
          "2022",
          "2021",
          "2020",
          "2019"
        ]
      }
      
    };
  }



export interface ChartSeries {
  name: string;
  data: number[];
}

export interface LineChartResponse {
  categories: string[];
  series: ChartSeries[];
}

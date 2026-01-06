// Line chart series
export interface LineChartResponse {
  name: string;
  data: number[];
  categories: string[];
}

export interface PieChartResponse {
  datasets: {
    data: number[];
  }[];
  labels: string[];
}


// Dashboard data (FIXED KEYS)
export interface DashboardChartsData {
  lineChart: LineChartResponse[];
  pieChart: PieChartResponse;
}

// API wrapper
export interface DashboardApiResponse {
  data: DashboardChartsData;
  message: string;
  status: number;
}

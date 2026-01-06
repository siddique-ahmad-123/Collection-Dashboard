import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { DashboardApiResponse, PieChartResponse } from '../models/charts.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {

  private readonly API_URL =
    'https://creditcdemo.newgensoftware.net/CollectionDashboardBackend/dashboard';

  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<DashboardApiResponse> {
    return this.http.get<DashboardApiResponse>(this.API_URL).pipe(
      catchError(err => {
        console.error('API Error:', err);
        return throwError(() => err);
      })
    );
  }

  getPieChartData(): Observable<PieChartResponse> {
    return this.getDashboardData().pipe(
      map(res => res.data.pieChart),
      catchError(err => {
        console.error('Pie Chart API Error:', err);
        return throwError(() => err);
      })
    );
  }
}

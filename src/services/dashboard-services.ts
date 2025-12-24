import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { LineChartResponse } from '../models/charts.model';


@Injectable({ providedIn: 'root' })
export class DashboardService {

  private readonly API_URL = '/api/dashboard/recovery-trends';

  constructor(private http: HttpClient) {}

  getRecoveryTrends(): Observable<LineChartResponse> {
    return this.http.get<LineChartResponse>(this.API_URL).pipe(
      catchError(err => {
        console.error('API Error:', err);
        return throwError(() => err);
      })
    );
  }
}

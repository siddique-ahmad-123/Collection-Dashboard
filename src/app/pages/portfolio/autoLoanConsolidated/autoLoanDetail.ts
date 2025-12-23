import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LineColumnBarChart } from '../../../shared/component/charts/line-columnBar-chart/line-columnBar-chart';
import { DynamicTableComponent, TableColumn } from '../../../shared/component/table/dynamicTable';

@Component({
  selector: 'app-auto-loan-detail',
  standalone: true,
  template: `
    <div class="p-6">
      <!-- Back Button -->
      <button (click)="goBack()" class="button-cust">Back</button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <app-dynamic-table
        [columns]="columns"
        [rows]="rows"
        [showCheckbox]="true"
        (rowSelect)="onRowSelect($event)"
      >
      </app-dynamic-table>
      <app-line-column-bar-chart></app-line-column-bar-chart>
    </div>
    <app-dynamic-table
      [columns]="columns1"
      [rows]="rows1"
      [showCheckbox]="true"
      (rowSelect)="onRowSelect($event)"
    >
    </app-dynamic-table>
  `,
  imports: [LineColumnBarChart, DynamicTableComponent],
})
export class AutoLoanDetailComponent {
  columns: TableColumn[] = [
    { key: 'parameterName', label: 'Top 5 Parameters' },
    { key: 'percentageContribution', label: 'Percentage Contribution', align: 'right' },
  ];

  columns1: TableColumn[] = [
    { key: 'parameterName', label: 'Top 5 Parameters' },
    { key: 'percentageContribution', label: 'Percentage Contribution', align: 'right' },
    { key: 'percentageContribution', label: 'Percentage Contribution', align: 'right' },
    { key: 'percentageContribution', label: 'Percentage Contribution', align: 'right' },
    { key: 'percentageContribution', label: 'Percentage Contribution', align: 'right' },
  ];

  rows = [
    { id: 1, parameterName: 'Fuel Type', percentageContribution: '9.98%' },
    { id: 2, parameterName: 'Vehicle Type', percentageContribution: '8.76%' },
    { id: 3, parameterName: 'Percentage Missed in Last Month', percentageContribution: '6.23%' },
    { id: 4, parameterName: 'Location', percentageContribution: '4.28%' },
    { id: 5, parameterName: 'Company', percentageContribution: '3.98%' },
  ];

  rows1 = [
    { id: 1, parameterName: 'Fuel Type', percentageContribution: '9.98%' },
    { id: 2, parameterName: 'Vehicle Type', percentageContribution: '8.76%' },
    { id: 3, parameterName: 'Percentage Missed in Last Month', percentageContribution: '6.23%' },
    { id: 4, parameterName: 'Location', percentageContribution: '4.28%' },
    { id: 5, parameterName: 'Company', percentageContribution: '3.98%' },
  ];

  onRowSelect($event: Event) {
    throw new Error('Method not implemented.');
  }

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}

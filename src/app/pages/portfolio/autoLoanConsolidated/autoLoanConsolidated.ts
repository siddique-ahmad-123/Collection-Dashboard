import { Component } from '@angular/core';
import { DynamicTableComponent, TableColumn } from '../../../shared/component/table/dynamicTable';
import { LineColumnBarChart } from "../../../shared/component/charts/line-columnBar-chart/line-columnBar-chart";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DynamicTableComponent, LineColumnBarChart],
  templateUrl: './autoLoanConsolidated.html'
})
export class autoLoanConsolidated {

  // ✅ Table columns (matches backend keys)
  columns: TableColumn[] = [
    {
      key: 'parameterName',
      label: 'Top 5 Parameters'
    },
    {
      key: 'percentageContribution',
      label: 'Percentage Contribution',
      align: 'right'
    }
  ];

  
  rows = [
    {
      id: 1,
      parameterName: 'Fuel Type',
      percentageContribution: '9.98%'
    },
    {
      id: 2,
      parameterName: 'Vehicle Type',
      percentageContribution: '8.76%'
    },
    {
      id: 3,
      parameterName: 'Percentage Missed in Last Month',
      percentageContribution: '6.23%'
    },
    {
      id: 4,
      parameterName: 'Location',
      percentageContribution: '4.28%'
    },
    {
      id: 5,
      parameterName: 'Company',
      percentageContribution: '3.98%'
    }
  ];

  onRowSelect(row: any) {
    console.log('Row selected:', row);
  }
}

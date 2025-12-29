import { Component } from '@angular/core';
import { PieChartComponent } from "../../shared/component/charts/pie-chart/pie-chart";
import { DonutChartComponent } from "../../shared/component/charts/donut-chart/donut-chart";
import { TableColumn, DynamicTableComponent } from '../../shared/component/table/dynamicTable';
import { ColumnChartComponent } from "../../shared/component/charts/column-chart/column-chart";
import { TableComponent } from "../../shared/component/ui/table/table.component";
import { ColumnGroupComponent } from "../../shared/component/charts/column-group/column-group";

@Component({
  selector: 'app-early-warning-dashboard',
  imports: [DonutChartComponent, DynamicTableComponent, ColumnChartComponent, ColumnGroupComponent],
  templateUrl: './early-warning-dashboard.html',
  //styleUrl: './early-warning-dashboard.css',
})
export class EarlyWarningDashboard {

  revenueSeries = [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
  ];

  

  aggregateSeries=[40,40,20];
  aggregateLabels=['High','Medium','Low'];
  aggregateColors=['#2196F3','#1DE9B6','#FBC02D'];

  monthlyInflation = [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2];

  months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  columns: TableColumn[] = [
      {
        key: 'parameterName',
        label: 'Risk Type'
      },
      {
        key: 'percentageContribution',
        label: '% of Total',
        align: 'right'
      }
    ];
  
    
    rows = [
      {
        id: 1,
        parameterName: 'High',
        percentageContribution: '40%'
      },
      {
        id: 2,
        parameterName: 'Medium',
        percentageContribution: '40%'
      },
      {
        id: 3,
        parameterName: 'Low',
        percentageContribution: '20%'
      },
      
    ];

    columns2: TableColumn[] = [
      {
        key: 'parameterName',
        label: 'Trigger/Remarks'
      },
      {
        key: 'percentageContribution',
        label: '% of Total',
        //align: 'right'
      }
    ];

    rows2 = [
      {
        id: 1,
        parameterName: 'Frequent OverDrafts',
        percentageContribution: '7%'
      },
      {
        id: 2,
        parameterName: 'Missed EMI Payments',
        percentageContribution: '13%'
      },
      {
        id: 3,
        parameterName: 'Declining Account Balances',
        percentageContribution: '7%'
      },
      {
        id: 4,
        parameterName: 'Job Instability',
        percentageContribution: '13%'
      },
      {
        id: 5,
        parameterName: 'Hight DTI Ratio',
        percentageContribution: '13%'
      },
      {
        id: 6,
        parameterName: 'Short term Borrowing / BNPL',
        percentageContribution: '13%'
      },
      {
        id: 7,
        parameterName: 'Medical/Large Unexpected ',
        percentageContribution: '13%'
      },
      {
        id: 8,
        parameterName: 'Collateral Depreciation/Falling',
        percentageContribution: '13%'
      },

      
     

     

      
     
      
    ];

  
    onRowSelect(row: any) {
      console.log('Row selected:', row);
    }
  
}

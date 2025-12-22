import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-loan-summary-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.html',
  styleUrls: ['./stat-card.css']
})
export class StatCardComponent {

  @Input() title!: string;

  @Input() casesDone!: number;
  @Input() totalCases!: number;

  @Input() overdueAmount!: number;
  @Input() totalAmount!: number;
}

import { Component, Input } from '@angular/core';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan-card',
  imports: [MatCardModule,MatIconModule,CommonModule],
  templateUrl: './loan-card.html',
})
export class LoanCard {
  @Input() title!: string;

  @Input() casesDone!: number;
  @Input() totalCases!: number;

  @Input() overdueAmount!: number;
  @Input() totalAmount!: number;
}

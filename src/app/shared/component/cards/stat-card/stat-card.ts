import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-case-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './stat-card.html'
})
export class CaseCardComponent {
  @Input() title!: string;
  @Input() value!: number;

  // Lucide icon (optional but recommended)
  @Input() icon?: LucideIconData;

  @Output() viewAll = new EventEmitter<void>();
}

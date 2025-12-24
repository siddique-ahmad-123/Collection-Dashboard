import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Trash2, Plus } from 'lucide-angular';
import { FormsModule } from '@angular/forms'; 

export interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
}

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [CommonModule, LucideAngularModule,FormsModule],
  templateUrl: './dynamicTable.html'
})
export class DynamicTableComponent {

  @Input() columns: TableColumn[] = [];
  @Input() rows: any[] = [];
  @Input() showCheckbox = false;
  @Output() rowSelect = new EventEmitter<any>();
  @Output() addRow = new EventEmitter<any>();
  @Output() deleteRows = new EventEmitter<any[]>();
  
  TrashIcon = Trash2;
  AddIcon = Plus;

  showAddForm = false;
  newRow: any = {};

  toggleRow(row: any, event: Event) {
    row.selected = (event.target as HTMLInputElement).checked;
    this.rowSelect.emit(row);
  }

  openAddForm() {
    this.newRow = {};
    this.showAddForm = true;
  }

  saveRow() {
    this.addRow.emit(this.newRow);
    this.showAddForm = false;
  }

  deleteSelectedRows() {
    const selected = this.rows.filter(r => r.selected);
    this.deleteRows.emit(selected);
  }
}

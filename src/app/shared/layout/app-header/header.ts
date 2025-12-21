import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.html',
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<void>();
}

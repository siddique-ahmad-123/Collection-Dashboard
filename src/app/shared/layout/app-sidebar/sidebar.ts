import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  @Input() open = true;
}

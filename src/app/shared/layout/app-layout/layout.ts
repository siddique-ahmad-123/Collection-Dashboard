import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../app-sidebar/sidebar';
import { HeaderComponent } from '../app-header/header';


@Component({
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './layout.html',
})
export class LayoutComponent {
  sidebarOpen = signal(true);
  toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }
}

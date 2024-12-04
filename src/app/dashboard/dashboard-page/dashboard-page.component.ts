import { Component } from '@angular/core';
import { MenuComponent } from '../ui/menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [MenuComponent, RouterOutlet],
  templateUrl: './dashboard-page.component.html',
  styles: ``
})
export class DashboardPageComponent {

}

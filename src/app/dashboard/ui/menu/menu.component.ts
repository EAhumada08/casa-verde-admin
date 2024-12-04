import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}

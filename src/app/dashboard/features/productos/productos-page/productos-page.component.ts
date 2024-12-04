import { Component, OnInit } from '@angular/core';
import { AgregarProductoComponent } from '../agregar-producto/agregar-producto.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-productos-page',
  standalone: true,
  imports: [AgregarProductoComponent],
  templateUrl: './productos-page.component.html',
  styles: ``
})
export class ProductosPageComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}

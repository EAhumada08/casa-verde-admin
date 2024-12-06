import { Component, inject, OnInit } from '@angular/core';
import { AgregarProductoComponent } from '../agregar-producto/agregar-producto.component';
import { initFlowbite } from 'flowbite';
import { SombrerosServices } from '../sombreros.service';

@Component({
  selector: 'app-productos-page',
  standalone: true,
  imports: [AgregarProductoComponent],
  templateUrl: './productos-page.component.html',
  styles: ``
})
export class ProductosPageComponent implements OnInit {
  sombreroService = inject(SombrerosServices);

  sombreros: any;

  ngOnInit(): void {
    initFlowbite();
  }

  constructor(){
    this.sombreroService.getSombreros().subscribe( (data)=> {
      this.sombreros = data;
    });
  }
}

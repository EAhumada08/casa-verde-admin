import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AgregarProductoComponent } from '../agregar-producto/agregar-producto.component';
import { initFlowbite } from 'flowbite';
import { SombrerosServices } from '../sombreros.service';
import { SombrerosStore } from '../sombreros.store';

@Component({
  selector: 'app-productos-page',
  standalone: true,
  imports: [AgregarProductoComponent],
  providers:[SombrerosStore],
  templateUrl: './productos-page.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styles: ``
})
export class ProductosPageComponent implements OnInit {
  sombreroService = inject(SombrerosServices);
  readonly store = inject(SombrerosStore);
  //sombreros: any;

  ngOnInit(): void {
    initFlowbite();
    this.store.loadSombreros();
    
  }

  constructor(){
    /*this.sombreroService.getSombreros().subscribe( (data)=> {
      this.sombreros = data;
    });*/
    console.log(this.store.sombreros())
    
  }

  delete(id:string){
    this.sombreroService.delete(id).subscribe((res)=>{
      console.log(res);
      this.store.loadSombreros()
    })
  }

  onChildEvt(){
    this.store.loadSombreros();
  }
}

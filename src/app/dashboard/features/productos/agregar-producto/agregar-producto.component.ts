import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SombrerosServices } from '../sombreros.service';
import { Router } from '@angular/router';
import { SombrerosStore } from '../sombreros.store';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers:[SombrerosStore],
  templateUrl: './agregar-producto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``
})
export class AgregarProductoComponent {

  readonly store = inject(SombrerosStore)
  sombrerosService = inject(SombrerosServices);

  router:Router = new Router();
  addProductForm: FormGroup;

  @Output() childEvent = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder){
    this.addProductForm = this.formBuilder.group({
      nombre:['', Validators.required],
      subtitulo: ['', Validators.required],
      imagen:['', Validators.required],
      precio:['', Validators.required],
      calidad:['', Validators.required],
      material: ['', Validators.required],
      ala: ['', Validators.required],
      copa: ['', Validators.required]
    })
  }

  onSubmit(){
    
    console.log(this.addProductForm.value);
    const sombrero = this.addProductForm.value;

    this.sombrerosService.newSombrero(sombrero).subscribe((response) => {
      console.log(response);
      this.childEvent.emit();
    });
    this.store.loadSombreros();
    this.addProductForm.reset();
  }

}

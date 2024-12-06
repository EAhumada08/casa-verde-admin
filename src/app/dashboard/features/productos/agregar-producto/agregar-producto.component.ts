import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SombrerosServices } from '../sombreros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-producto.component.html',
  styles: ``
})
export class AgregarProductoComponent {
  sombrerosService = inject(SombrerosServices);

  router:Router = new Router();
  addProductForm: FormGroup;

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
    /*const sombrero = this.addProductForm.value;

    this.sombrerosService.newSombrero(sombrero).subscribe((response) => {
      console.log(response);
    });*/
    this.router.navigate(['dashboard/productos']);
    
  }
}

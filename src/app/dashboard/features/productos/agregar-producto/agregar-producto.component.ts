import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-producto.component.html',
  styles: ``
})
export class AgregarProductoComponent {
  addProductForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.addProductForm = this.formBuilder.group({
      nombre:[''],
      subtitulo: [''],
      imagen:[''],
      precio:[''],
      calidad:[''],
      material: [''],
      ala: [''],
      copa: ['']
    })
  }

  onSubmit(){
    console.log(this.addProductForm.value)
  }
}

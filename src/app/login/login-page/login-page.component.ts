import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../data-access/admin.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styles: `
  `
})
export class LoginPageComponent {
  adminService = inject(AdminService);

  router:Router = new Router();
  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.loginForm = this.formBuilder.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.valid) {
      const credenciales = this.loginForm.value;

      console.log("Form: ", this.loginForm.value)

      this.adminService.auth(credenciales)
        .subscribe(
          (res:any) => {
            console.log("response: ", res);
            this.router.navigate(['dashboard']);
          },
          (error:any) => {
            console.log("Error", error);
            this.router.navigate(['']);
          } 
        );
    }
  }
}

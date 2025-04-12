import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { Router } from '@angular/router';
import { SelectModule } from 'primeng/select';
import { ApiService } from '../../../../../core/services/api.service';
import { PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,FormsModule,DropdownModule
    ,PasswordModule,InputTextModule,CheckboxModule,SelectModule]
})
export class CreateComponent implements OnInit{

  userForm!: FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private apiService:ApiService){

  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      activo: [null],
      username: [''],
      password: [''],
      lastname: [''],
      name: [''],
      email: [''],
      // created_at: [''],
      // created_by: [''],
      // user: [''],
      // updated_at: [''],
    });

  }



  cancelar() {
    this.userForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/security/users'])
  }

  save(){

    const {
      name,
      username,
      password,
      email,
      activo,
      lastname
    }  = this.userForm.value;

     const user = JSON.parse(localStorage.getItem('user') || '{}');

    const body = {
      userName: username,
      email: email,
      clave: password,
      activo: activo? activo.length > 0 ? '1' : '0' : '0',
      idPerfil: user.perfil_Id,
      idEmpresa: user.empresa_Id,
      usuario: name,
      nombreUsuario:name,
      apellidoUsuario:lastname,
      terminal: "string",
      fecha: new Date().toISOString(),
    }

    this.apiService.createUser(body).subscribe({
      next: (res:any) => {
        console.log('res',res);
        this.router.navigate(['/dashboard/security/users']);
      },
      error: (error:any) => {
        console.log('error',error);
      },
    });


  }

}

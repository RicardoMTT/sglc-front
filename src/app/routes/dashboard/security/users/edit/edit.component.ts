import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { Router } from '@angular/router';
import { SelectModule } from 'primeng/select';


@Component({
  selector: 'app-edit',
  standalone: true,
  templateUrl: './edit.component.html',
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,FormsModule,DropdownModule,InputTextModule,CheckboxModule,SelectModule]
})
export class EditComponent implements OnInit{

  userForm!: FormGroup;

  tabs = [
    { label: 'Información general' },
    { label: 'Direcciones' },
    { label: 'Consignatarios' },
    { label: 'Datos de auditoría' }
  ];

  activeTab = 0;

  tiposDocumento: any[] = [
    { label: 'DNI', value: 'DNI' },
    { label: 'Pasaporte', value: 'Pasaporte' },
    { label: 'Carnet de extranjería', value: 'CE' },
  ];

  departamentos: any[] = [
    { label: 'LIMA', value: 'LIMA' },
    { label: 'AREQUIPA', value: 'AREQUIPA' },
  ];
  provincias: any[] = [
    { label: 'LIMA', value: 'LIMA' },
    { label: 'CALLAO', value: 'CALLAO' },
  ];

  distritos: any[] = [
    { label: 'JESÚS MARÍA', value: 'JESÚS MARÍA' },
    { label: 'MIRAFLORES', value: 'MIRAFLORES' },
  ];

  tiposCliente: any[] = [
    { label: 'Nacional', value: 'NACIONAL' },
    { label: 'Extranjero', value: 'EXTRANJERO' },
  ];


  constructor(private fb:FormBuilder,private router:Router){

  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      active: [true],
      userId: ['123'],
      user: ['rtest12'],
      password: ['DNI'],
      lastName: [''],
      names: [''],
      email: ['test@gmail.com'],
      role: ['Administrador'],
      create_user: ['ricardo'],
      creation_date: ['2020/03/06'],
      user_update: ['ricardo'],
      update_date: ['2025/05/04'],
    });

  }

  guardarCliente() {
    if (this.userForm.valid) {
      console.log('Datos del cliente:', this.userForm.value);
    }
  }

  cancelar() {
    this.userForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/security/users'])
  }

  save(){

  }

}

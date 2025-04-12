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


@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,FormsModule,DropdownModule,InputTextModule,CheckboxModule,SelectModule]
})
export class CreateComponent implements OnInit{

  profileForm!: FormGroup;

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


  constructor(private fb:FormBuilder,private router:Router,
    private apiService:ApiService
  ){

  }
  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('user')|| '{}'));

    this.profileForm = this.fb.group({
      description:[''],
      observation:[''],
      active:[null],
    });

  }

  guardarCliente() {
    if (this.profileForm.valid) {
      console.log('Datos del cliente:', this.profileForm.value);
    }
  }

  cancelar() {
    this.profileForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/security/profiles'])
  }

  save(){

    const {description,observation,active} = this.profileForm.value;
    const user = JSON.parse(localStorage.getItem('user')|| '{}');

    const body = {
      descripcion: description,
      empresa_Id: user.empresa_Id,
      observacion: observation,
      activo: active ? "1" :"0",
      userCrea: user?.userName,
      terminalCrea: "123123.23232",
      fechaCrea: new Date().toISOString()
    }

    this.apiService.createProfile(body).subscribe({
      next: (data) => {
        console.log('data',data);
        this.router.navigate(['/dashboard/security/profiles']);
      },
      error: (error) => {
        console.log('error',error);
      }
    })

  }

}

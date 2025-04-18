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
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,FormsModule,DropdownModule,InputTextModule,CheckboxModule,SelectModule]
})
export class CreateComponent implements OnInit{

  clienteForm!: FormGroup;

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
    this.clienteForm = this.fb.group({
      numeroCliente: [''],
      activo: [true],
      nombres: [''],

      correo: [''],
      tipoDocumento: ['DNI'],
      documento: [''],
      direccion: [''],
      departamento: ['LIMA'],
      provincia: ['LIMA'],
      distrito: ['JESÚS MARÍA'],
      telefono1: [''],
      telefono2: [''],
      tipoCliente: ['NACIONAL'],
    });

  }

  guardarCliente() {
    if (this.clienteForm.valid) {
      console.log('Datos del cliente:', this.clienteForm.value);
    }
  }

  cancelar() {
    this.clienteForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/operations/clients'])
  }

  save(){

  }

}

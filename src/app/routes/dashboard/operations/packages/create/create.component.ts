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

  packageForm!: FormGroup;

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
    this.packageForm = this.fb.group({
      packageNumber: [''],
      active: [true],
      tracking: [''],
      purchaseDate: [''],
      store: [''],
      warehouse: [''],
      weight: [''],
      lockerStore: ['LIMA'],
      departmentDestination: ['LIMA'],
      observations: ['JESÚS MARÍA'],
      provinceDestination: [''],
      grocerName: [''],
      districtDestination: ['NACIONAL'],
      receiverName: ['NACIONAL'],
    });

  }

  guardarCliente() {
    if (this.packageForm.valid) {
      console.log('Datos del cliente:', this.packageForm.value);
    }
  }

  cancelar() {
    this.packageForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/operations/packages'])
  }

  save(){

  }

}

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

  geographicLocationForm!: FormGroup;

  constructor(private fb:FormBuilder,private router:Router){

  }

  ngOnInit(): void {
    this.geographicLocationForm = this.fb.group({
      active: [true],
      department: ['LIMA'],
      newDepartment:[''],
      province: ['LIMA'],
      newProvince: [''],
      district: ['SURCO'],
      newDistrict: ['']
    });
  }

  guardarCliente() {
    if (this.geographicLocationForm.valid) {
      console.log('Datos del cliente:', this.geographicLocationForm.value);
    }
  }

  cancelar() {
    this.geographicLocationForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/geographic-location'])
  }

  save(){

  }

}

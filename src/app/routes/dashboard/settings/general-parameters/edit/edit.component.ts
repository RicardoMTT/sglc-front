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

  parameterForm!: FormGroup;

  constructor(private fb:FormBuilder,private router:Router){

  }

  ngOnInit(): void {
    this.parameterForm = this.fb.group({
      code: ['PARAM001'],
      active: [true],
      applyAllCompanies: [true],
      value: ['Sol'],
      name: ['MONEDA'],
      firstValue: ['S/'],
      secondValue: ['']
    });
  }

  guardarCliente() {
    if (this.parameterForm.valid) {
      console.log('Datos del cliente:', this.parameterForm.value);
    }
  }

  cancelar() {
    this.parameterForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/general-parameters'])
  }

  save(){

  }

}

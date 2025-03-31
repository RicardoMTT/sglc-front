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

  countryForm!: FormGroup;

  constructor(private fb:FormBuilder,private router:Router){

  }

  ngOnInit(): void {
    this.countryForm = this.fb.group({
      active: [true],
      number_country: ['0000123'],
      name_country: ['Perú'],
    });
  }

  guardarCliente() {
    if (this.countryForm.valid) {
      console.log('Datos del cliente:', this.countryForm.value);
    }
  }

  cancelar() {
    this.countryForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/countries'])
  }

  save(){

  }

}

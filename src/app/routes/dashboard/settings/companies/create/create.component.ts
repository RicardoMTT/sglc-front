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

  companyForm!: FormGroup;

  constructor(private fb:FormBuilder,private router:Router){

  }

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      is_master_company: [true],
      active: [true],
      number_company: [''],
      email_company:[''],
      name_company: [''],
      email_admin: [''],
      ruc: [''],
      main_direction: [''],
      postal_code: [''],
      company_type: [''],
      have_agencies: [true],
      main_logo: [''],
      access_main_image: [''],
    });
  }

  guardarCliente() {
    if (this.companyForm.valid) {
      console.log('Datos del cliente:', this.companyForm.value);
    }
  }

  cancelar() {
    this.companyForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/companies'])
  }

  save(){

  }

}

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

  emailconfigurationForm!: FormGroup;

  optionsMenu:any = [
    {
      id:'1',
      name:'Paquetes'
    }
  ]
  constructor(private fb:FormBuilder,private router:Router){

  }

  ngOnInit(): void {
    this.emailconfigurationForm = this.fb.group({
      id: [''],
      active: [true],
      name: [true],
      email_name: [''],
      email_subject: [''],
      email_signer: [''],
    });
  }

  guardarCliente() {
    if (this.emailconfigurationForm.valid) {
      console.log('Datos del cliente:', this.emailconfigurationForm.value);
    }
  }

  cancelar() {
    this.emailconfigurationForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/email-configuration'])
  }

  save(){

  }

}

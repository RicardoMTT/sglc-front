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
      id: ['CC00059'],
      active: [true],
      name: [true],
      email_name: ['Notificacion 1'],
      email_subject: ['Recepcióon registro paquete'],
      email_signer: ['Juan Perez'],
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

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

  documentForm!: FormGroup;

  modules:any =  [
    {
      name:'test',
      code:'123456'
    }
  ]
  constructor(private fb:FormBuilder,private router:Router){

  }

  ngOnInit(): void {
    this.documentForm = this.fb.group({
      prefix: ['PR'],
      active: [true],
      module_name: ['clients'],
      number: ['00004455']
    });
  }

  guardarCliente() {
    if (this.documentForm.valid) {
      console.log('Datos del cliente:', this.documentForm.value);
    }
  }

  cancelar() {
    this.documentForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/documents-generator'])
  }

  save(){

  }

}

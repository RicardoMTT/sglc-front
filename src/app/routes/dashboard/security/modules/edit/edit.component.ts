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

  moduleForm!: FormGroup;

  optionsModule = [
    {
      id:1,
      name:'SI'
    },
    {
      id:2,
      name:'NO'
    }
  ]

  optionsModuleFather = [
    {
      id:1,
      name:'SEGURIDAD'
    }
  ]


  optionsIconModule = [
    {
      id:1,
      name:'LIMA'
    }
  ]
  constructor(private fb:FormBuilder,private router:Router){

  }

  ngOnInit(): void {
    this.moduleForm = this.fb.group({
      active:[true],
      identification_number:[''],
      module_name:[''],
      page_name:[''],
      prefix:[''],
      main_module:[true],
      father_module:[''],
      order_module:[''],
      icon_module:[''],

    });

  }

  guardarCliente() {
    if (this.moduleForm.valid) {
      console.log('Datos del cliente:', this.moduleForm.value);
    }
  }

  cancelar() {
    this.moduleForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/security/modules'])
  }

  save(){

  }

}

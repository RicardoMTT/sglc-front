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

  profileForm!: FormGroup;


  constructor(private fb:FormBuilder,private router:Router){

  }
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      profile_module:[''],
      name:[''],
      profile:[''],
      module:[''],
      active:[true]
    });

  }

  guardarCliente() {
    if (this.profileForm.valid) {
      console.log('Datos del cliente:', this.profileForm.value);
    }
  }

  cancelar() {
    this.profileForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/security/profiles-module'])
  }

  save(){

  }

}

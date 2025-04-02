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

  activityForm!: FormGroup;

  constructor(private fb:FormBuilder,private router:Router){

  }

  ngOnInit(): void {
    this.activityForm = this.fb.group({
      active: [true],
      identification_number: [''],
      date:[''],
      activity: [''],
    });
  }

  guardarCliente() {
    if (this.activityForm.valid) {
      console.log('Datos del cliente:', this.activityForm.value);
    }
  }

  cancelar() {
    this.activityForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/activities-calendar'])
  }

  save(){

  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { Router } from '@angular/router';
import { SelectModule } from 'primeng/select';
import { ApiService } from '../../../../../core/services/api.service';

import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,FormsModule,DropdownModule,InputTextModule,CheckboxModule,SelectModule,TextareaModule]
})
export class CreateComponent implements OnInit{

  emailconfigurationForm!: FormGroup;

  modules:any = [
  ]
  constructor(private fb:FormBuilder,private router:Router,
    private apiService:ApiService
  ){

  }

  ngOnInit(): void {
    this.getModules();
    this.emailconfigurationForm = this.fb.group({
      id: [''],
      active: [null],
      module: [true],
      email_name: [''],
      email_subject: [''],
      email_signer: [''],
      email_text:['']
    });
  }

  getModules(){
    this.apiService.getModules().subscribe({
      next: ((data:any) => {
        this.modules = data.data;
      })
    })
  }


  cancelar() {
    this.emailconfigurationForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/email-configuration'])
  }

  save(){

    console.log(this.emailconfigurationForm.value);

    const { active,module,email_name,email_signer,email_subject,email_text} = this.emailconfigurationForm.value;
    console.log(active);
      console.log(module);
      const user = JSON.parse(localStorage.getItem('user')|| '{}');

    const body = {
      mailId: 0,
      empresaId: user.empresa_Id,
      moduloId: module.modulo_id,
      activo: active != null ? active.length > 0 ? "1" : "0" : "0",
      nombreEmail: email_name,
      asuntoEmail: email_subject,
      textoEmail: email_text,
      firmaEmail: email_signer,
      usuario: user.userName,
      terminal: "",
      fecha: new Date().toISOString()
    }

    console.log(body);
    this.apiService.createEmail(body).subscribe({
      next: (_) => {
        this.router.navigate(['/dashboard/settings/email-configuration'])
      }
    })

  }

}

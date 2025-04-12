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


@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,FormsModule,DropdownModule,InputTextModule,CheckboxModule,SelectModule]
})
export class CreateComponent implements OnInit{

  smtpServerForm!: FormGroup;

  constructor(private fb:FormBuilder,private router:Router,
    private apiService:ApiService
  ){

  }

  ngOnInit(): void {
    this.smtpServerForm = this.fb.group({
      id_server_smtp: [''],
      active: [null],
      name_server: [''],
      username:[''],
      password: [''],
      port: [''],
      host: [''],
    });
  }

  guardarCliente() {
    if (this.smtpServerForm.valid) {
      console.log('Datos del cliente:', this.smtpServerForm.value);
    }
  }

  cancelar() {
    this.smtpServerForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/smtp-server'])
  }

  save(){

    console.log(this.smtpServerForm);

    const {
      active,
      host,
      name_server,
      password,
      port,username
    } = this.smtpServerForm.value;

    const user = JSON.parse(localStorage.getItem('user')|| '{}');

    const body = {
      servidorSmtpId: 0,
      empresaId: user.empresa_Id,
      nombreServidor: name_server,
      activo: active ? active.length > 0 ? "1" : "0" : "0",
      usuario: username,
      contrasenia: password,
      host: host,
      puerto: port,
      usuarioAud: user.userName,
      terminal: "",
      fecha: new Date().toISOString()
    }

    this.apiService.createServerSMTP(body).subscribe({
      next: (_) => {
        this.router.navigate(['dashboard/settings/smtp-server']);
      }
    })

  }

}

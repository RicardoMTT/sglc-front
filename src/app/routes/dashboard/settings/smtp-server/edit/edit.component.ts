import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectModule } from 'primeng/select';
import { ApiService } from '../../../../../core/services/api.service';


@Component({
  selector: 'app-edit',
  standalone: true,
  templateUrl: './edit.component.html',
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,FormsModule,DropdownModule,InputTextModule,CheckboxModule,SelectModule]
})
export class EditComponent implements OnInit{

  smtpServerForm!: FormGroup;
  elements: any;
  id: string;
  item: any;

  constructor(private fb:FormBuilder,private router:Router,
    private apiService:ApiService,
    private route:ActivatedRoute
  ){

    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log('id',this.id);
  }

  ngOnInit(): void {
    this.index();
    this.createForm();
  }

  createForm(){
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

  index(){
    this.apiService.getAllSmtp().subscribe({
      next:(data:any) =>{
       console.log('data',data);
        this.elements = data.data;
        this.item = this.elements.filter((element:any) => element.servidor_Smtp_Id == this.id)[0];
        console.log(this.item);
        this.smtpServerForm.patchValue({
          id_server_smtp:this.item.servidor_Smtp_Id,
          active:this.item.activo == "1" ? ["true"] : null,
          name_server:this.item.nombre_Servidor_Smtp,
          username:this.item.usuario,
          password:this.item.contraseña,
          port:this.item.puerto,
          host:this.item.host
        })

      }
    })
  }

  cancelar() {
    this.smtpServerForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/companies'])
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
console.log(this.smtpServerForm.value);

    const user = JSON.parse(localStorage.getItem('user')|| '{}');

    const body = {
      servidorSmtpId: this.id,
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

    console.log(body);

    this.apiService.updateSmtp(body).subscribe({
      next: (_) => {
        this.router.navigate(['dashboard/settings/smtp-server']);
      }
    })

  }

}

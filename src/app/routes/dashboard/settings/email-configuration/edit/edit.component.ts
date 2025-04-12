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

import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-edit',
  standalone: true,
  templateUrl: './edit.component.html',
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,FormsModule,DropdownModule,InputTextModule,CheckboxModule,SelectModule,TextareaModule]
})
export class EditComponent implements OnInit{

  emailconfigurationForm!: FormGroup;

  modules:any = [
  ]
  id: string;
  emailsConfiguration: any;
  constructor(private fb:FormBuilder,private router:Router,
    private apiService:ApiService,
    private route:ActivatedRoute
  ){
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log('id',this.id);
  }

  ngOnInit(): void {
    this.createForm();
    this.getModules();
  }

  index(){
    this.apiService.getEmails().subscribe({
      next:(data:any) =>{
        this.emailsConfiguration = data.data;
        console.log(this.emailsConfiguration);
        console.log(this.id);
        const item = this.emailsConfiguration.filter((email:any) => email.mail_Id == this.id)[0];
        console.log(item);
        const module = this.modules.filter((mod:any) => mod.modulo_id == item.modulo_Id)[0];

        this.emailconfigurationForm.patchValue({
          id:item.mail_Id,
          active:item.activo == "1" ? ["true"] : null,
          module:module,
          email_name:item.nombre_Email,
          email_subject:item.asunto_Email,
          email_signer:item.firma_Email,
          email_text:item.texto_Email
        })


      }
    })
  }

  createForm(){
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
        this.index();
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

    const {
      active,
      module,
      email_name,
      email_signer,
      email_subject,
      email_text,
      id
    } = this.emailconfigurationForm.value;

    console.log(active);
      console.log(module);
      const user = JSON.parse(localStorage.getItem('user')|| '{}');

    const body = {
      mailId: id,
      empresaId: user.empresa_Id,
      moduloId: module.modulo_id,
      activo: active.length > 0 ? "1" : "0",
      nombreEmail: email_name,
      asuntoEmail: email_subject,
      textoEmail: email_text,
      firmaEmail: email_signer,
      usuario: user.userName,
      terminal: "",
      fecha: new Date().toISOString()
    }

    console.log(body);
    this.apiService.updateEmail(body).subscribe({
      next: (_) => {
        this.router.navigate(['/dashboard/settings/email-configuration'])
      }
    })

  }

}

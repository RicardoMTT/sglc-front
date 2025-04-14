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

  userForm!: FormGroup;
  users = [];
  id: string;
  user: any;
  profiles: any;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private apiService:ApiService,
    private route:ActivatedRoute
  ){
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {

    this.getProfiles();

    this.userForm = this.fb.group({
      active: [null],
      userId: [''],
      user: [''],
      password: [''],
      lastName: [''],
      names: [''],
      username: [''],
      email: [''],
      create_user: [''],
      creation_date: [''],
      user_update: [''],
      update_date: [''],
      profile:[null]
    });

  }

  index(){
    this.apiService.getAllUsers().subscribe((res:any) => {
      this.users = res.data;
      this.user = this.users.filter((user:any) => user.usuario_Id == this.id)[0];
      console.log(this.profiles);
      const profile = this.profiles.filter((pro:any) => pro.perfiL_ID == this.user.perfil_Id)[0];
      console.log(this.user);
      this.userForm.patchValue({
        active: this.user.activo == "1" ? ["true"] : null,
        userId: this.user.usuario_Id,
        user: this.user.nombre_Usuario,
        password: this.user.clave,
        lastName: this.user.apellido_Usuario,
        names: this.user.nombre_Usuario,
        email:this.user.email,
        create_user: this.user.usuario_Creacion,
        creation_date: this.user.fecha_Creacion,
        user_update: this.user.usuario_Actualizacion,
        username: this.user.username,
        update_date: this.user.fecha_Actualizacion,
        profile
      })

    },
    (error:any) => {
      console.log('error',error);
    });
  }

  cancelar() {
    this.userForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/security/users'])
  }

  save(){

    const {
      active,
      user,
      password,
      lastName,
      username,
      names,
      email,
      profile
    } = this.userForm.value;

    const userLS = JSON.parse(localStorage.getItem('user')|| '{}');

    const body = {
      idUsuario: this.id,
      idEmpresa: userLS.empresa_Id,
      userName: username,
      email: email,
      clave: password,
      activo: active ? active.length > 0 ? "1" : "0" : "0",
      idPerfil: profile.perfiL_ID,
      nombreUsuario: names,
      apellidosUsuario: lastName,
      usuario: user,
      terminal: "",
      fecha: new Date().toISOString()
    }


    console.log(body);

    return;
    this.apiService.updateUser(body).subscribe({
      next: (_) => {
        this.router.navigate(['/dashboard/security/users'])
      }
    })

  }


  getProfiles(){
    this.apiService.getAllProfile().subscribe({
      next: (data:any) => {
        console.log('data',data);
        this.profiles = data.data;
        this.index();
      },
      error: (error) => {
        console.log('error',error);

      }
    })
  }

}

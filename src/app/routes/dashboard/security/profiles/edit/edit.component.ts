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

  profileForm!: FormGroup;

  tabs = [
    { label: 'Información general' },
    { label: 'Direcciones' },
    { label: 'Consignatarios' },
    { label: 'Datos de auditoría' }
  ];

  activeTab = 0;

  tiposDocumento: any[] = [
    { label: 'DNI', value: 'DNI' },
    { label: 'Pasaporte', value: 'Pasaporte' },
    { label: 'Carnet de extranjería', value: 'CE' },
  ];

  departamentos: any[] = [
    { label: 'LIMA', value: 'LIMA' },
    { label: 'AREQUIPA', value: 'AREQUIPA' },
  ];
  provincias: any[] = [
    { label: 'LIMA', value: 'LIMA' },
    { label: 'CALLAO', value: 'CALLAO' },
  ];

  distritos: any[] = [
    { label: 'JESÚS MARÍA', value: 'JESÚS MARÍA' },
    { label: 'MIRAFLORES', value: 'MIRAFLORES' },
  ];

  tiposCliente: any[] = [
    { label: 'Nacional', value: 'NACIONAL' },
    { label: 'Extranjero', value: 'EXTRANJERO' },
  ];

  profiles = [];
  id: string;
  profile: any;

  constructor(private fb:FormBuilder,
              private router:Router,
              private apiService:ApiService,
              private route:ActivatedRoute
            ){
              this.id = this.route.snapshot.paramMap.get('id')!;
              this.createForm();
  }

  createForm(){
    this.profileForm = this.fb.group({
      description: [null],
      observation: [null],
      active: [null],
    });
  }
  ngOnInit(): void {
    this.index();
  }

  index(){
    this.apiService.getAllProfile().subscribe({
      next: (data:any) => {
        this.profiles = data.data;
        this.profile = this.profiles.filter((item:any) => item.perfiL_ID == this.id)[0];
        this.setForm();
      },
      error: (error) => {
        console.log('error',error);

      }
    })
  }

  setForm(){

    console.log(this.profile);

    this.profileForm.patchValue({
      description: this.profile.descripcion,
      observation: this.profile.observacion,
      active: this.profile.activo == '1' ? ["Activo"] : null,
    });
  }


  cancelar() {
    this.profileForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/security/profiles'])
  }

  save(){
    const {description,observation,active} = this.profileForm.value;

    const user = JSON.parse(localStorage.getItem('user')|| '{}');
    const body = {
      idPerfil: this.id,
      descripcion: description,
      observacion:observation,
      empresaId: user?.empresa_Id,
      activo: active ? active.length > 0 ? "1" :"0" :"0",
    }


    this.apiService.updateProfile(body).subscribe({
      next: (_) => {
        this.router.navigate(['/dashboard/security/profiles']);
      },
      error: (error:any) => {
        console.log('error',error);
      }
    })


  }

}

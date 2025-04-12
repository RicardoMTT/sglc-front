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

  loading: boolean = false;
  parentModules = [];

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private apiService:ApiService){

  }

  ngOnInit(): void {
    this.moduleForm = this.fb.group({
      active:[null],
      module_name:[''],
      page_name:[''],
      prefix:[''],
      main_module:[true],
      father_module:[{ value: ''}],
      order_module:[''],
      icon_module:[''],
    });

    this.getParentModules();

    // Escuchar cambios en el control "main_module"
    this.moduleForm.get('main_module')?.valueChanges.subscribe((value) => {
      const fatherModuleControl = this.moduleForm.get('father_module');
      if (value.name === true || value.name === 'SI') {
        fatherModuleControl?.disable(); // Deshabilitar si es "SI"
        fatherModuleControl?.reset(); // Opcional: limpiar el valor
      } else {
        fatherModuleControl?.enable(); // Habilitar si no es "SI"
      }
    });


  }

  getParentModules(){
    this.apiService.getParentModules().subscribe({
      next:(data:any) => {
        console.log('data',data);
        this.parentModules = data.data;
      },
      error:(error) => {
        console.log('error',error);
      }
    })
  }

  save() {

    this.loading = true;

    const {active,module_name
      ,page_name,prefix,main_module,father_module,order_module,
    } = this.moduleForm.value;

    console.log(father_module);
    console.log(active);

    const body = {
      modulo_Id: 0,
      nombre_Modulo: module_name,
      modulo_Padre_Id:main_module.name == "SI" ? "0": father_module.modulo_Id ,
      pagina_Modulo: page_name,
      modulo_Principal: main_module.name == "SI" ? "1" : "0",
      prefijo_Modulo: prefix,
      orden_Modulo: order_module,
      activo: active == null ? "0" : "1"
    }



    this.apiService.store(body).subscribe({
      next: (_) => {
        this.loading = false;
        this.router.navigate(['dashboard/security/modules'])
      },
      error: (error:any) => {
        this.loading = false;
      }
    })

  }

  cancelar() {
    this.moduleForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/security/modules'])
  }

}

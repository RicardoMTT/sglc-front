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

  ]


  optionsIconModule = [
    {
      id:1,
      name:'LIMA'
    }
  ]
  parentModules = [];
  modules = [];
  id!: string;
  module: any;

  constructor(private fb:FormBuilder,private router:Router,private apiService:ApiService,
    private route:ActivatedRoute
  ){
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getAllModules();
    this.moduleForm = this.fb.group({
      active:[true],
      module_name:[''],
      page_name:[''],
      prefix:[''],
      main_module:[true],
      father_module:[''],
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


  getAllModules(){
    this.apiService.getModules().subscribe({
      next: ((data:any) => {
        this.modules = data.data;
        this.module = this.modules.filter((item:any) => item.modulo_id == this.id)[0];

        const parentModule = this.parentModules.find((module:any) => module.modulo_Id == this.module.modulo_Padre_Id);

        this.moduleForm.patchValue({
          active: this.module.activo == "1" ? ["Activo"]: [],
          module_name: this.module.nombre_Modulo,
          page_name: this.module.pagina_Modulo,
          prefix: this.module.prefijo_Modulo,
          main_module: this.module.modulo_Principal == "1" ? this.optionsModule[0] : this.optionsModule[1],
          father_module: this.module.modulo_Principal == "1" ? null : parentModule,
          order_module: this.module.orden_Modulo,
          icon_module: this.module.icono_modulo
        })
      })
    })
  }

  getParentModules(){
    this.apiService.getParentModules().subscribe({
      next:(data:any) => {
        this.parentModules = data.data;
      },
      error:(error) => {
        console.log('error',error);
      }
    })
  }



  toBack(){
    this.router.navigate(['/dashboard/security/modules'])
  }

  save(){
    if (this.moduleForm.valid) {
      const {
        active,
        module_name,
        page_name,
        prefix,
        main_module,
        father_module,
        order_module
      } = this.moduleForm.value;

      let idModuleFather:any;

      if (father_module) {
        idModuleFather= this.parentModules.find((module:any) => module.modulo_Id == father_module.modulo_Id );
      }

      const body = {
        modulo_Id: this.id,
        nombre_Modulo: module_name,
        modulo_Padre_Id: main_module.name == "SI" ? 0 : idModuleFather?.modulo_Id,
        pagina_Modulo: page_name,
        modulo_Principal: main_module.name == "SI" ? "1" : "0",
        prefijo_Modulo: prefix,
        orden_Modulo: order_module,
        activo: active.length > 0 ? "1" : "0"
      }


      this.apiService.updateModule(body).subscribe({
        next:(_) => {
          this.router.navigate(['dashboard/security/modules'])
        },
        error:(_) => {

        }
      });

    }
  }

}

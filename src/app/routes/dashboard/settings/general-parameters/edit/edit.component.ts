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

  parameterForm!: FormGroup;
  id: string;
  parameters: any;
  parameter: any;

  constructor(private fb:FormBuilder,private router:Router,
              private route:ActivatedRoute,
              private apiService:ApiService
  ){
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log('id',this.id);

  }

  ngOnInit(): void {
    this.index();
    this.createForm();
  }

  createForm(){
    this.parameterForm = this.fb.group({
      code: [''],
      active: [null],
      main_value: [''],
      equivalent_value: [''],
      name: [''],
      minValue: [''],
      maxValue: [''],
      abreviated_name: [''],
    });
  }



  index(){
    this.apiService.getAllParameters().subscribe((res:any) => {
      this.parameters = res.data;
      this.parameter = this.parameters.find((parameter:any) => parameter.parametro_Id == this.id);
      console.log(this.parameter);

      this.parameterForm.patchValue({
        code: this.parameter.codigo_Parametro,
        active: this.parameter.activo == "1" ? ["true"]: null,
        main_value: this.parameter.valor_Principal,
        equivalent_value: this.parameter.valor_Equivalente,
        name: this.parameter.nombre_Parametro,
        minValue: this.parameter.valor_1,
        maxValue: this.parameter.valor_2,
        abreviated_name: this.parameter.nombre_Abreviado,
      });


    },
    (error:any) => {
      console.log('error',error);
    });
  }

  guardarCliente() {
    if (this.parameterForm.valid) {
      console.log('Datos del cliente:', this.parameterForm.value);
    }
  }

  cancelar() {
    this.parameterForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/general-parameters'])
  }

  save(){

    console.log(this.parameterForm.value);

    const body = {
      nombreParametro: this.parameterForm.value.name,
      activo: this.parameterForm.value.active.length > 0 ? "1" : "0",
      codigoParametro: this.parameterForm.value.code,
      valorPrincipal: this.parameterForm.value.main_value,
      valorEquivalente: this.parameterForm.value.equivalent_value,
      valorMaximo: this.parameterForm.value.maxValue,
      valorMinimo: this.parameterForm.value.minValue,
      nombreAbreviado: this.parameterForm.value.abreviated_name,
      idGenearal: this.id
    }
    console.log(body);

    this.apiService.updateParameter(body).subscribe(
      {
        next: (res:any) => {
          console.log('res',res);
          this.router.navigate(['/dashboard/settings/general-parameters']);

        },
        error: (error:any) => {
          console.log('error',error);
      }
    }
    )

  }

}

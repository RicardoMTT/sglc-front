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

  companyForm!: FormGroup;
  companies: any;
  id: string;
  company: any;

  departments:any[] = [];
  provinces:any[] = [];
  districts:any[] = [];

  constructor(private fb:FormBuilder,private router:Router,private apiService:ApiService,
    private route:ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.index();
    this.createForm();
  }

  getAllDepartments(){
    this.apiService.ObtenerUbigeosCombo("1","0","0","0","0").subscribe({
      next:(data:any) => {
        console.log('data',data);
        this.departments = data.data;
        const response = this.departments.filter((depa:any) => depa.cod_Departamento == this.company.cod_Departamento)[0];
        console.log('response',response);
        this.getProvinceByCodProvinceCompany(this.company.cod_Departamento);
        this.companyForm.patchValue({
          department:response
        });

      }
    })
  }

  getProvinceByCodProvinceCompany(departmentCode:string){
    this.apiService.ObtenerUbigeosCombo("0","1","0",departmentCode,"0").subscribe({
      next:(data:any) => {
        console.log('data',data);
        this.provinces = data.data
        const response = this.provinces.filter((prov:any) => prov.cod_Provincia == this.company.cod_Provincia)[0];
        console.log('response',response);

        this.getDistrictByCodDistrictCompany(this.company.cod_Provincia);
        this.companyForm.patchValue({
          province:response
        });

      }
    })
  }

  onDepartmentChange(event:any){
    console.log(event);
    const response = this.departments.filter((depa:any) => depa.cod_Departamento == event.value.cod_Departamento)[0];

    this.getProvinceById(event.value.cod_Departamento);
    this.companyForm.patchValue({
      department:response,
      province:null,
      district:null
    });

  }


  onProvinceChange(event:any){
    console.log(event);
    const response = this.provinces.filter((prov:any) => prov.cod_Provincia == event.value.cod_Provincia)[0];
    this.getDistrictById(event.value.cod_Provincia);
    this.companyForm.patchValue({
      province:response,
      district:null
    });
  }

  getProvinceById(departmentCode:string){
    this.apiService.ObtenerUbigeosCombo("0","1","0",departmentCode,"0").subscribe({
      next:(data:any) => {
        console.log('data',data);
        this.provinces = data.data
      }});
  }



  getDistrictById(provinceCode:string){
    this.apiService.ObtenerUbigeosCombo("0","0","1","0",provinceCode).subscribe({
      next:(data:any) => {
        console.log('data',data);
        this.districts = data.data
      }});
  }


  getDistrictByCodDistrictCompany(provinceCode:string){
    console.log('proin',provinceCode);

    this.apiService.ObtenerUbigeosCombo("0","0","1","0",provinceCode).subscribe({
      next:(data:any) => {
        console.log('data',data);
        this.districts = data.data
        const response = this.districts.filter((prov:any) => prov.cod_Distrito == this.company.cod_Distrito)[0];
        console.log('response',response);

        this.companyForm.patchValue({
          district:response
        });

      }
    })
  }

  getAllProvinces(){
    this.apiService.ObtenerUbigeosCombo("0","1","0","0","0").subscribe({
      next:(data:any) => {
        console.log('data',data);

      }
    })
  }

  getAllDistricts(){
    this.apiService.ObtenerUbigeosCombo("0","0","1","0","0").subscribe({
      next:(data:any) => {
        console.log('data',data);

      }
    })
  }


  createForm(){

    this.companyForm = this.fb.group({
      active: [true],
      number_company: ['',{ disabled: true }],
      email_company:[''],
      email_operations: [''],
      name_company: [''],
      email_admin: [''],
      ruc: [''],
      main_direction: [''],
      postal_code: [''],
      company_type: [''],
      main_logo: [''],
      access_main_image: [''],
      department: [''],
      province: [''],
      district: [''],
      onePhone: [''],
      twoPhone: [''],
    });
  }



  index(){
    this.apiService.getAllCompanies().subscribe((res:any) => {
      this.companies = res.data;
      this.company = this.companies.find((company:any) => company.empresa_Id == this.id);
      console.log(this.company);
      console.log(this.id);
      this.getUbigeos();

      this.companyForm.patchValue({
        active: this.company.activo ? ["true"] : null,
        number_company: this.company.empresa_Id,
        email_company: this.company.correo_Electronico,
        email_operations: this.company.correo_Operaciones,
        name_company: this.company.nombre_Empresa,
        email_admin: this.company.correo_Administracion,
        ruc: this.company.ruc_Empresa,
        main_direction: this.company.direccion_Empresa,
        postal_code: this.company.codigo_Postal,
        company_type: this.company.tipo_Empresa,
        main_logo: this.company.empresa_Logo_Principal,
        access_main_image: this.company.empresa_Acceso_Logo_Principal,
        department: this.company.cod_Departamento,
        province: this.company.cod_Provincia,
        district: this.company.cod_Distrito,
        onePhone: this.company.telefono_Uno,
        twoPhone: this.company.telefono_Dos,

      });


    },
    (error:any) => {
      console.log('error',error);
    });
  }


  getUbigeos(){
    this.getAllDepartments();
  }

  cancelar() {
    this.companyForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/companies'])
  }

  save(){

    console.log(this.companyForm.value);

    console.log(this.companyForm.value);

    const body = {
      "empresa_Id": this.companyForm.value.number_company,
      "ruc_Empresa": this.companyForm.value.ruc,
      "nombre_Empresa": this.companyForm.value.name_company,
      "tipo_Empresa": this.companyForm.value.company_type,
      "activo": this.companyForm.value.active.length > 0 ? "1" : "0",
      "direccion_Empresa": this.companyForm.value.main_direction,
      "codigo_Postal": this.companyForm.value.postal_code,
      "telefono_Uno": this.companyForm.value.onePhone,
      "telefono_Dos": this.companyForm.value.twoPhone,
      "correo_Electronico": this.companyForm.value.email_company,
      "logotipo_Principal": "",
      "logotipo_Secundario": "",
      "cod_Departamento": this.companyForm.value.department.cod_Departamento,
      "cod_Provincia": this.companyForm.value.province.cod_Provincia,
      "cod_Distrito": this.companyForm.value.district.cod_Distrito,
      "correo_Operaciones": this.companyForm.value.email_operations,
      "correo_Administracion": this.companyForm.value.email_admin
    }

    this.apiService.updateCompany(body).subscribe({
      next: (_) => {
        this.router.navigate(['/dashboard/settings/companies'])
      }
    })
    console.log(body);

  }

}

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

  documentForm!: FormGroup;

  modules:any =  [

  ]

  documents: any;
  id: string;
  document: any;
  newModules: any = [];
  currentModule: any;
  constructor(private fb:FormBuilder,private router:Router,private apiService:ApiService,
    private route:ActivatedRoute
  ){
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getAllModules();
    this.createForm();

  }

  getAllModules(){
    this.apiService.getModules().subscribe({
      next: ((data:any) => {
        this.modules = data.data;
        this.newModules = this.modules.filter((item :any)=> item.modulo_Principal == "0");
        this.index();


      })
    })
  }
  createForm(){
    this.documentForm = this.fb.group({
      prefix: [''],
      module_name: [''],
      number: ['']
    });

    this.documentForm.get('module_name')?.disable();
  }


  index(){
    this.apiService.getAllNumerator().subscribe({
      next: (data:any) => {
        this.documents = data.data;

        this.document = this.documents.find((doc:any) => doc.numeradoR_DOCUMENTO_ID == this.id);


        this.currentModule = this.newModules.filter((item:any) => item.nombre_Modulo == this.document.nombrE_MODULO)[0];


        this.documentForm.patchValue({
          prefix:this.document.prefijo,
          module_name:this.currentModule,
          number:this.document.numero
        })



      }
    })
  }


  cancelar() {
    this.documentForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/settings/documents-generator'])
  }

  save(){


    const {
      prefix,
      number
    } = this.documentForm.value;

    const user = JSON.parse(localStorage.getItem('user')|| '{}');

    const body = {
      id_Modulo : this.currentModule.modulo_id,
      prefijo:prefix,
      numerador:number,
      empresa_Id:user.empresa_Id
    }

    this.apiService.updateNumerator(body).subscribe({
      next:(_) => {
        this.router.navigate(['/dashboard/settings/documents-generator']);
      }
    })


  }

}

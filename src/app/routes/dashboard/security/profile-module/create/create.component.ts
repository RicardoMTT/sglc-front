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
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';


@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,FormsModule,DropdownModule,InputTextModule,CheckboxModule,SelectModule,TreeModule]
})
export class CreateComponent implements OnInit{

  profileForm!: FormGroup;
  profiles: any;
  newTree: TreeNode[] = [];


  selectedItems!: TreeNode[];
  callTree: boolean = false;
  allChildren!: any[];

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private apiService:ApiService){

  }

  ngOnInit(): void {
    this.index();
    this.profileForm = this.fb.group({
      profile:[''],
    });
  }


  generateProfileModule(){

    const {profile} = this.profileForm.value;

    const body = {
      idPerfil: profile.perfiL_ID
    };


    this.apiService.insertProfileModule(body).subscribe({
      next:(data:any) => {
        console.log('data',data);
        this.getTreeWithProfileModules();
      }
    })
  }

  /*
    Obtenemos la data con la que luego la convertiremos en una estructura de arbol
    (donde cada módulo padre contiene sus hijos), podemos usar el campo modulo_Padre_Id
    para determinar jerarquías.
    Donde:
    -Los elementos con modulo_Padre_Id === 0 son módulos raíz o principales.
    -Los demás son hijos del módulo cuyo modulo_Id coincide con su modulo_Padre_Id.
  */
  getTreeWithProfileModules(){
    const {profile} = this.profileForm.value;

    const body = {
      perfil_Id: profile.perfiL_ID
    };
    this.apiService.ObtenerArbolPerfilModulos(body).subscribe({
      next:(data:any) => {
        const moduloArbol = this.buildModuloTree(data.data);
        console.log(moduloArbol);
        const newModules = moduloArbol.filter(item => item.children.length > 0 );
        console.log(newModules);

        this.newTree = this.modulosToTreeNodes(this.getModulosConHijos(moduloArbol));
        this.allChildren = this.newTree.flatMap(module => module.children);
      }
    })
  }


  modulosToTreeNodes(modulos: any[]): TreeNode[] {
    return modulos.map(mod => ({
      key: mod.modulo_Id.toString(),
      label: mod.nombre_Modulo,
      data: mod,
      children: mod.children && mod.children.length > 0 ? this.modulosToTreeNodes(mod.children) : [],
      selectable: true,
      expanded: false // opcional: para mostrar el nodo abierto por A
    }));
  }

  /**
  Filtramos para obtener los padres que tengan al menos un hijo
  */
  getModulosConHijos(tree: any[]): any[] {
    return tree
      .filter(mod => mod.children && mod.children.length > 0)
      .map(mod => ({
        ...mod,
      }));
  }


  buildModuloTree(modulos: any[]): any[] {
    const moduloMap = new Map<number, any>();
    const tree: any[] = [];

    // Agrupamos por modulo_Id (para evitar duplicados)
    const uniqueModules = new Map<number, any>();

    for (const mod of modulos) {
      if (!uniqueModules.has(mod.modulo_Id)) {
        uniqueModules.set(mod.modulo_Id, { ...mod });
      }
    }

    // Creamos un mapa para acceso rápido
    uniqueModules.forEach(mod => {
      moduloMap.set(mod.modulo_Id, mod);
      mod.children = [];
    });

    // Armamos el árbol
    moduloMap.forEach(mod => {
      if (mod.modulo_Padre_Id === 0) {
        tree.push(mod); // módulo raíz
      } else {
        const parent = moduloMap.get(mod.modulo_Padre_Id);
        if (parent) {
          parent.children?.push(mod);
        }
      }
    });

    return tree;
  }

  cancelar() {
    this.profileForm.reset();
  }


  toBack(){
    this.router.navigate(['/dashboard/security/profiles-module'])
  }


  index(){
    this.apiService.getAllProfile().subscribe({
      next: (data:any) => {
        console.log('data',data);
        this.profiles = data.data;
      },
      error: (error) => {
        console.log('error',error);

      }
    })
  }

  save(){


    const newSelectedItems = this.selectedItems.map((item:any) => item.data);
    console.log(newSelectedItems);

    const newSelectedItemsFiltered = newSelectedItems.filter((item) => item.modulo_Principal != "1");
    console.log(newSelectedItemsFiltered);

    const newChildrens = this.allChildren.map((item:any) => item.data)
    console.log(newChildrens);


    const result = newChildrens.filter(child =>
      !newSelectedItemsFiltered.some(selected => selected.perfil_Modulo_Id === child.perfil_Modulo_Id)
    );

    const user = JSON.parse(localStorage.getItem('user')|| '{}');
    console.log(result);
    const modulesChecked = newSelectedItemsFiltered.map((item:any)=> {
      return {
        perfilModuloId: item.perfil_Modulo_Id,
        activo: "1",
        usuarioActualizacion: user.userName,
        terminalActualizacion: ""
      }
    });
    console.log(modulesChecked);

    const modulesNotChecked = result.map((item:any)=>{
      return {
        perfilModuloId: item.perfil_Modulo_Id,
        activo: "0",
        usuarioActualizacion: user.userName,
        terminalActualizacion: ""
      }
    });
    console.log(modulesNotChecked);

    const totalModules = [...modulesChecked, ...modulesNotChecked];

    console.log('total',totalModules);



    const {profile} = this.profileForm.value;


    console.log(profile.perfiL_ID);

    const body = {
      idPerfil: profile.perfiL_ID,
      modulos: totalModules
    }
  }



}

import { Routes } from '@angular/router';
import { ProfileModuleComponent } from './profile-module.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


export const PROFILES_MODULE_ROUTES: Routes = [
  {
    path: '',
    component: ProfileModuleComponent, // ✅ Sera el contenedor principal
    children:[
      {
        path: '', component: IndexComponent
      },
      {
        path: 'create', component: CreateComponent
      },
      {
        path: 'edit/:id',component :EditComponent
      }
    ]
   },
];

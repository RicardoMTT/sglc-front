import { Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


export const MODULES_ROUTES: Routes = [
  {
    path: '',
    component: ModulesComponent, // ✅ Sera el contenedor principal
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

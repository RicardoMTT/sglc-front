import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


export const COMPANIES_ROUTES: Routes = [
  {
    path: '',
    component: CompaniesComponent, // ✅ Sera el contenedor principal
    children:[
      {
        path: '', component: IndexComponent
      },
      {
        path: 'create', component: CreateComponent
      },
      {
        path: 'edit/:id', component: EditComponent
      }
    ]
   },
];

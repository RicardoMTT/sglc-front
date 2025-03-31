import { Routes } from '@angular/router';;
import { CountriesComponent } from './countries.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


export const COUNTRIES_ROUTES: Routes = [
  {
    path: '',
    component: CountriesComponent, // ✅ Sera el contenedor principal
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

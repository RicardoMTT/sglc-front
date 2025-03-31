import { Routes } from '@angular/router';
import { GeographicLocationComponent } from './geographic-location.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


export const GEOGRAPHIC_LOCATION_ROUTES: Routes = [
  {
    path: '',
    component: GeographicLocationComponent, // ✅ Sera el contenedor principal
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

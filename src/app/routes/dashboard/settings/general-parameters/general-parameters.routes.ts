import { Routes } from '@angular/router';
import { GeneralParametersComponent } from './general-parameters.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';

export const GENERAL_PARAMETERS_ROUTES: Routes = [
  {
    path: '',
    component: GeneralParametersComponent, // ✅ Sera el contenedor principal
    children:[
      {
        path: '', component: IndexComponent
      },
      {
        path: 'edit/:id', component: EditComponent
      }
    ]
   },
];

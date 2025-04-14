import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ConsolidatesComponent } from './consolidates.component';


export const CONSOLIDATES_ROUTES: Routes = [
  {
    path: '',
    component: ConsolidatesComponent, // ✅ Sera el contenedor principal
    children:[
      {
        path: '', component: IndexComponent
      },
      // {
      //   path: 'create', component: CreateComponent
      // },
      // {
      //   path: ':id', component: ClientComponent
      // },
      // {
      //   path: 'edit/:id', component: EditComponent
      // }
    ]
   },
];

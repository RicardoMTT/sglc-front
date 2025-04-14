import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GuidesComponent } from './guides.component';


export const GUIDES_ROUTES: Routes = [
  {
    path: '',
    component: GuidesComponent, // ✅ Sera el contenedor principal
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

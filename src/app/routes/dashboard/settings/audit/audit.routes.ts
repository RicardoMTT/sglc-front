import { Routes } from '@angular/router';
import { AuditComponent } from './audit.component';
import { IndexComponent } from './index/index.component';



export const AUDITS_ROUTES: Routes = [
  {
    path: '',
    component: AuditComponent, // ✅ Sera el contenedor principal
    children:[
      {
        path: '', component: IndexComponent
      },
      // {
      //   path: 'create', component: CreateComponent
      // },
      // {
      //   path: 'edit/:id', component: EditComponent
      // }
    ]
   },
];

import { Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { IndexComponent } from './index/index.component';
import { ClientComponent } from './client/client.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

export const CLIENTS_ROUTES: Routes = [
  {
    path: '',
    component: ClientsComponent, // ✅ Sera el contenedor principal
    children:[
      {
        path: '', component: IndexComponent
      },
      {
        path: 'create', component: CreateComponent
      },
      {
        path: ':id', component: ClientComponent
      },
      {
        path: 'edit/:id', component: EditComponent
      }
    ]
   },
];

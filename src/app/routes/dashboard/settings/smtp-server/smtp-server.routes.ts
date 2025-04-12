import { Routes } from '@angular/router';
import { SmtpServerComponent } from './smtp-server.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

export const SMTP_SERVER_ROUTES: Routes = [
  {
    path: '',
    component: SmtpServerComponent, // ✅ Sera el contenedor principal
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

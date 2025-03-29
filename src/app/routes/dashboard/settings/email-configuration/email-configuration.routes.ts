import { Routes } from '@angular/router';
import { EmailConfigurationComponent } from './email-configuration.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


export const EMAIL_CONFIGURATION_ROUTES: Routes = [
  {
    path: '',
    component: EmailConfigurationComponent, // ✅ Sera el contenedor principal
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

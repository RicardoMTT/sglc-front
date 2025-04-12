import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NotificationsComponent } from './notifications.component';

export const NOTIFICATIONS_ROUTES: Routes = [
  {
    path: '',
    component: NotificationsComponent, // ✅ Sera el contenedor principal
    children:[
      {
        path: '', component: IndexComponent
      },
      // {
      //   path: 'edit/:id', component: EditComponent
      // }
    ]
   },
];

import { Routes } from '@angular/router';

import { SecurityComponent } from './security.component';
import { USERS_ROUTES } from './users/users.routes';
import { PROFILES_ROUTES } from './profiles/profiles.routes';

export const SECURITY_ROUTES: Routes = [
  {
    path: '',
    component: SecurityComponent, // ✅ Sera el contenedor principal
    children:[
      {
        path: 'users', children: USERS_ROUTES
      },
      {
        path: 'profiles', children: PROFILES_ROUTES
      },
    ]
   },
];

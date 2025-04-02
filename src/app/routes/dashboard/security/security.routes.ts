import { Routes } from '@angular/router';

import { SecurityComponent } from './security.component';

import { USERS_ROUTES } from './users/users.routes';
import { PROFILES_ROUTES } from './profiles/profiles.routes';
import { MODULES_ROUTES } from './modules/modules.routes';
import { PROFILES_MODULE_ROUTES } from './profile-module/profile-module.routes';

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
      {
        path: 'modules', children: MODULES_ROUTES
      },
      {
        path: 'profiles-module', children: PROFILES_MODULE_ROUTES
      }
    ]
   },
];

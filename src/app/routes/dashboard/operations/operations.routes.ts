import { Routes } from '@angular/router';
import { OperationsComponent } from './operations.component';
import { PACKAGES_ROUTES } from './packages/packages.routes';
import { CLIENTS_ROUTES } from './clients/clients.routes';


export const OPERATIONS_ROUTES: Routes = [
  {
    path: '',
    component: OperationsComponent, // ✅ Sera el contenedor principal
    children:[
      {
        path: 'clients', children: CLIENTS_ROUTES
      },
      {
        path: 'packages', children: PACKAGES_ROUTES
      },
    ]
   },
];

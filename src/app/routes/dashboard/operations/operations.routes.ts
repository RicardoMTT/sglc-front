import { Routes } from '@angular/router';
import { OperationsComponent } from './operations.component';
import { PACKAGES_ROUTES } from './packages/packages.routes';
import { CLIENTS_ROUTES } from './clients/clients.routes';
import { WAREHOUSE_ROUTES } from './warehouse/warehouse.routes';
import { GUIDES_ROUTES } from './guides/guides.routes';
import { CONSOLIDATES_ROUTES } from './consolidates/consolidates.routes';


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
      {
        path: 'warehouse', children: WAREHOUSE_ROUTES
      },
      {
        path: 'guides', children: GUIDES_ROUTES
      },
      {
        path: 'consolidates', children: CONSOLIDATES_ROUTES
      },
    ]
   },
];

import { Routes } from '@angular/router';
import { WarehouseComponent } from './warehouse.component';
import { IndexComponent } from './index/index.component';


export const WAREHOUSE_ROUTES: Routes = [
  {
    path: '',
    component: WarehouseComponent, // ✅ Sera el contenedor principal
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

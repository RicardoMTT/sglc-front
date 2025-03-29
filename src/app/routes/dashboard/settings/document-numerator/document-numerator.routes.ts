import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DocumentNumeratorComponent } from './document-numerator.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


export const DOCUMENT_NUMERATOR_ROUTES: Routes = [
  {
    path: '',
    component: DocumentNumeratorComponent, // ✅ Sera el contenedor principal
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

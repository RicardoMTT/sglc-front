import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path:'',
    component:AuthComponent,
    children:[
      { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
      { path: 'register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) },
      { path: '',redirectTo:'login',pathMatch:'full' }
    ]
  }
 ];

import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { SECURITY_ROUTES } from './security/security.routes';
import { OPERATIONS_ROUTES } from './operations/operations.routes';
import { SETTINGS_ROUTES } from './settings/settings.routes';
// import { authGuard } from '../../core/guards/auth.guard'; // Guard para proteger rutas

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'operaciones', children: OPERATIONS_ROUTES },
      { path: 'seguridad', children: SECURITY_ROUTES },
      { path: 'settings', children: SETTINGS_ROUTES },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

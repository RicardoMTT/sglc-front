import { Routes } from '@angular/router';
import { PUBLIC_ROUTES } from './routes/auth/auth.routes';
import { DASHBOARD_ROUTES } from './routes/dashboard/dashboard.routes';
import { authGuard } from './core/guards/auth.guard';

/**
 * Cada grupo de rutas(PUBLIC_ROUTES,DASHBOARD_ROUTES) tendrá un componente base que renderiza con el router-outlet
 */
export const routes: Routes = [
  {
    path: 'auth',
    children: PUBLIC_ROUTES
  },
  {
    path: 'dashboard',
    children: DASHBOARD_ROUTES,
    // canActivate: [authGuard]
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];

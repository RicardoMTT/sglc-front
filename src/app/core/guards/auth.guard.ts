import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Obtén una instancia del Router
  const userData = localStorage.getItem('user'); // Obtén los datos del usuario del localStorage

  if (userData) {
    const user = JSON.parse(userData);
    if (user && user.activo === '1') {
      return true; // Permite el acceso si el usuario está activo
    }
  }

  router.navigate(['/auth/login']); // Redirige al login si no está autenticado
  return false;
};

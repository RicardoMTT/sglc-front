import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from '../item/item.component';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    templateUrl: './menu.component.html',
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard',
                items: [
                  {
                    label: 'Inicio',
                    icon: 'pi pi-fw pi-home',
                    routerLink: ['/dashboard/home']
                  }
                ]
            },
            {
              label: 'Operaciones',
              items: [
                {
                  label: 'Paquetes',
                  icon: 'pi pi-fw pi-check-square',
                  routerLink: ['/dashboard/operaciones/paquetes']
                },
                {
                    label: 'Clientes',
                    icon: 'pi pi-fw pi-user',
                    routerLink: ['/dashboard/operaciones/clientes']
                },
              ]
            },
            {
              label: 'Seguridad',
              items: [
                {
                  label: 'Usuarios',
                  icon: 'pi pi-fw pi-user',
                  routerLink: ['/dashboard/seguridad/users']
                },
                {
                  label: 'Perfiles',
                  icon: 'pi pi-fw pi-check-square',
                  routerLink: ['/dashboard/seguridad/profiles']
                },
                {
                  label: 'Módulos',
                  icon: 'pi pi-fw pi-check-square'
                },
                {
                  label: 'Perfil Módulos',
                  icon: 'pi pi-fw pi-check-square'
                },
              ]
            },
            {
              label: 'Configuraciones',
              items: [
                {
                  label: 'Parámetros generales',
                  icon: 'pi pi-fw pi-user',
                  routerLink: ['/dashboard/settings/general-parameters']
                },
                {
                  label: 'Empresas',
                  icon: 'pi pi-fw pi-check-square',
                  routerLink: ['/dashboard/seguridad/profiles']
                },
                {
                  label: 'Países',
                  icon: 'pi pi-fw pi-check-square'
                },
                {
                  label: 'Ubicación geografica',
                  icon: 'pi pi-fw pi-check-square'
                },
                {
                  label: 'Numerador documentos',
                  icon: 'pi pi-fw pi-check-square',
                  routerLink: ['/dashboard/settings/documents-generator']
                },
              ]
            },
            {
              label: 'Utilitarios',
              items: [
                {
                  label: 'Configuración correos',
                  icon: 'pi pi-fw pi-user',
                  routerLink: ['/dashboard/settings/email-configuration']
                },
                {
                  label: 'Calendario Actividades',
                  icon: 'pi pi-fw pi-check-square',
                  routerLink: ['/dashboard/seguridad/profiles']
                },
                {
                  label: 'Auditorias',
                  icon: 'pi pi-fw pi-check-square'
                },

              ]
            },
        ];
    }
}

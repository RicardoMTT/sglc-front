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
                  icon: 'pi pi-fw pi-box',
                  routerLink: ['/dashboard/operations/packages']
                },
                {
                  label: 'Clientes',
                  icon: 'pi pi-fw pi-user',
                  routerLink: ['/dashboard/operations/clients']
                },
                {
                  label: 'Warehouse',
                  icon: 'pi pi-fw pi-warehouse',
                  routerLink: ['/dashboard/operations/warehouse']
                },
                {
                  label: 'Guías',
                  icon: 'pi pi-fw pi-file',
                  routerLink: ['/dashboard/operations/guides']
                },
                {
                  label: 'Consolidados',
                  icon: 'pi pi-fw pi-folder',
                  routerLink: ['/dashboard/operations/consolidates']
                }
              ]
            },
            {
              label: 'Seguridad',
              items: [
                {
                  label: 'Usuarios',
                  icon: 'pi pi-fw pi-user',
                  routerLink: ['/dashboard/security/users']
                },
                {
                  label: 'Perfiles',
                  icon: 'pi pi-fw pi-id-card',
                  routerLink: ['/dashboard/security/profiles']
                },
                {
                  label: 'Módulos',
                  icon: 'pi pi-fw pi-th-large',
                  routerLink: ['/dashboard/security/modules']
                },
                {
                  label: 'Perfil Módulos',
                  icon: 'pi pi-fw pi-check-square',
                  routerLink: ['/dashboard/security/profiles-module']
                },
              ]
            },
            {
              label: 'Configuraciones',
              items: [
                {
                  label: 'Parámetros generales',
                  icon: 'pi pi-fw pi-cog',
                  routerLink: ['/dashboard/settings/general-parameters']
                },
                {
                  label: 'Empresas',
                  icon: 'pi pi-fw pi-building',
                  routerLink: ['/dashboard/settings/companies']
                },
                {
                  label: 'Países',
                  icon: 'pi pi-fw pi-globe',
                  routerLink: ['/dashboard/settings/countries']
                },
                {
                  label: 'Ubicación geografica',
                  icon: 'pi pi-fw pi-map-marker',
                  routerLink: ['/dashboard/settings/geographic-location']
                },
                {
                  label: 'Numerador documentos',
                  icon: 'pi pi-fw pi-file',
                  routerLink: ['/dashboard/settings/documents-generator']
                },
              ]
            },
            {
              label: 'Utilitarios',
              items: [
                {
                  label: 'Configuración correos',
                  icon: 'pi pi-fw pi-envelope',
                  routerLink: ['/dashboard/settings/email-configuration']
                },
                {
                  label: 'Calendario Actividades',
                  icon: 'pi pi-fw pi-calendar',
                  routerLink: ['/dashboard/settings/activities-calendar']
                },
                {
                  label: 'Auditorias',
                  icon: 'pi pi-fw pi-search',
                  routerLink: ['/dashboard/settings/audits']
                },
                {
                  label: 'Configuración Servidor SMTP',
                  icon: 'pi pi-fw pi-server',
                  routerLink: ['/dashboard/settings/smtp-server']
                },
                {
                  label: 'Notificaciónes',
                  icon: 'pi pi-fw pi-bell',
                  routerLink: ['/dashboard/settings/notifications']
                },

              ]
            },
            {
              label: 'Mi perfil',
              items: [
                {
                  label: 'Solicitar embarque / paquetes',
                  icon: 'pi pi-fw pi-envelope',
                  routerLink: ['/dashboard/settings/email-configuration']
                },
                {
                  label: 'Consultar tracking',
                  icon: 'pi pi-fw pi-search',
                  routerLink: ['/dashboard/settings/activities-calendar']
                },
                {
                  label: 'Consultar Guía de embarque',
                  icon: 'pi pi-fw pi-file',
                  routerLink: ['/dashboard/settings/audits']
                },
              ]
            },
        ];
    }
}

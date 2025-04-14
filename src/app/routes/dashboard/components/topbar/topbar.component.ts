import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../../../core/services/layout.service';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterModule, CommonModule, StyleClassModule, Menu],
  templateUrl: './topbar.component.html',
})
export class AppTopbar implements OnInit {
  items!: MenuItem[];

  profileMenuItems: MenuItem[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.profileMenuItems = [
      {
        label: 'Datos de Perfil',
        icon: 'pi pi-user',
        command: () => this.viewProfile(),
      },
      {
        label: 'Cambiar Contraseña',
        icon: 'pi pi-key',
        command: () => this.changePassword(),
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => this.logout(),
      },
    ];
  }

  viewProfile() {}

  logout() {}

  changePassword() {}

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }
}

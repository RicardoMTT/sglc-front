import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  styles: [
    `
      :host ::ng-deep {
        .p-paginator {
          .p-paginator-current {
            margin-left: auto;
          }
        }

        .p-progressbar {
          height: 0.5rem;
          background-color: #d8dadc;

          .p-progressbar-value {
            background-color: #607d8b;
          }
        }

        .table-header {
          display: flex;
          justify-content: space-between;
        }

        .p-calendar .p-datepicker {
          min-width: 25rem;

          td {
            font-weight: 400;
          }
        }

        .p-datatable.p-datatable-customers {
          .p-datatable-header {
            padding: 1rem;
            text-align: left;
            font-size: 1.5rem;
          }

          .p-paginator {
            padding: 1rem;
          }

          .p-datatable-thead > tr > th {
            text-align: left;
          }

          .p-datatable-tbody > tr > td {
            cursor: auto;
          }

          .p-dropdown-label:not(.p-placeholder) {
            text-transform: uppercase;
          }
        }

        .p-w-100 {
          width: 100%;
        }

        /* Responsive */
        .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
          display: none;
        }
      }

      @media screen and (max-width: 960px) {
        :host ::ng-deep {
          .p-datatable {
            &.p-datatable-customers {
              .p-datatable-thead > tr > th,
              .p-datatable-tfoot > tr > td {
                display: none !important;
              }

              .p-datatable-tbody > tr {
                border-bottom: 1px solid var(--layer-2);

                > td {
                  text-align: left;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  border: 0 none;

                  .p-column-title {
                    min-width: 30%;
                    display: inline-block;
                    font-weight: bold;
                  }

                  p-progressbar {
                    width: 100%;
                  }

                  &:last-child {
                    border-bottom: 1px solid var(--surface-d);
                  }
                }
              }
            }
          }
        }
      }
    `,
  ],
  imports: [
    CommonModule,
    TableModule,
    IconFieldModule,
    InputTextModule,
    ButtonModule,
    InputIconModule,
    MultiSelectModule,
    SelectModule,
    RouterModule,
    Menu,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class IndexComponent {
  @ViewChild('dt') dt: Table | undefined;



  items = [
    {
      items: [
        {
          label: 'Eliminar items seleccionados',
          icon: 'pi pi-refresh',
          command: () => {
            this.actionOne();
          },
        },
        {
          label: 'Exportar items seleccionados',
          icon: 'pi pi-upload',
          command: () => {
            this.actionTwo();
          },
        },
      ],
    },
  ];


  users = [
    { code: 'USU00001', names: 'Roberto Carlos', lastName: 'Jan Guerra', user: 'rcarlosguerra', profile: 'Administrador', active: true },
    { code: 'USU00002', names: 'María López', lastName: 'Gómez Torres', user: 'mlopezgomez', profile: 'Usuario', active: true },
    { code: 'USU00003', names: 'Carlos García', lastName: 'Fernández Ruiz', user: 'cgarciafernandez', profile: 'Supervisor', active: false },
    { code: 'USU00004', names: 'Ana Torres', lastName: 'Martínez Díaz', user: 'atorresmartinez', profile: 'Administrador', active: true },
    { code: 'USU00005', names: 'Luis Fernández', lastName: 'Ramírez Vega', user: 'lfernandezramirez', profile: 'Usuario', active: false },
    { code: 'USU00006', names: 'Sofía Martínez', lastName: 'Cruz Paredes', user: 'smartinezcruz', profile: 'Supervisor', active: true },
    { code: 'USU00007', names: 'Pedro Castillo', lastName: 'Navarro Sánchez', user: 'pcastillonavarro', profile: 'Administrador', active: true },
    { code: 'USU00008', names: 'Lucía Gómez', lastName: 'Hernández Vargas', user: 'lgomezhernandez', profile: 'Usuario', active: false },
    { code: 'USU00009', names: 'Jorge Ramírez', lastName: 'Flores Castillo', user: 'jramirezflores', profile: 'Supervisor', active: true },
    { code: 'USU00010', names: 'Elena Vargas', lastName: 'Morales Cruz', user: 'evargasmorales', profile: 'Administrador', active: true },
    { code: 'USU00011', names: 'Miguel Rojas', lastName: 'Pérez Díaz', user: 'mrojasperez', profile: 'Usuario', active: false },
    { code: 'USU00012', names: 'Carmen Díaz', lastName: 'Guerra López', user: 'cdiazguerra', profile: 'Supervisor', active: true },
    { code: 'USU00013', names: 'Ricardo Sánchez', lastName: 'Vega Torres', user: 'rsanchezvega', profile: 'Administrador', active: true },
    { code: 'USU00014', names: 'Valeria Morales', lastName: 'Cruz Ramírez', user: 'vmoralescruz', profile: 'Usuario', active: false },
    { code: 'USU00015', names: 'Andrés Herrera', lastName: 'Navarro Díaz', user: 'aherreranavarro', profile: 'Supervisor', active: true },
    { code: 'USU00016', names: 'Paula Cruz', lastName: 'Martínez Vega', user: 'pcruzmartinez', profile: 'Administrador', active: true },
    { code: 'USU00017', names: 'Diego Navarro', lastName: 'Sánchez Guerra', user: 'dnavarrosanchez', profile: 'Usuario', active: false },
    { code: 'USU00018', names: 'Gabriela Paredes', lastName: 'Hernández López', user: 'gparedeshernandez', profile: 'Supervisor', active: true },
    { code: 'USU00019', names: 'Héctor Vega', lastName: 'Flores Castillo', user: 'hvegaflores', profile: 'Administrador', active: true },
    { code: 'USU00020', names: 'Isabel Flores', lastName: 'Cruz Ramírez', user: 'iflorescruz', profile: 'Usuario', active: true },
    { code: 'USU00021', names: 'Juan Guerra', lastName: 'Pérez Díaz', user: 'jguerraperez', profile: 'Supervisor', active: true },
    { code: 'USU00022', names: 'María Sánchez', lastName: 'Vega Torres', user: 'msanchezvega', profile: 'Administrador', active: false },
    { code: 'USU00023', names: 'Carlos Torres', lastName: 'Navarro Díaz', user: 'ctorresnavarro', profile: 'Usuario', active: true },
    { code: 'USU00024', names: 'Ana López', lastName: 'Martínez Vega', user: 'alopezmartinez', profile: 'Supervisor', active: true },
    { code: 'USU00025', names: 'Luis Ramírez', lastName: 'Sánchez Guerra', user: 'lramirezsanchez', profile: 'Administrador', active: false },
    { code: 'USU00026', names: 'Sofía Vargas', lastName: 'Hernández López', user: 'svargashernandez', profile: 'Usuario', active: true },
    { code: 'USU00027', names: 'Pedro Gómez', lastName: 'Flores Castillo', user: 'pgomezflores', profile: 'Supervisor', active: true },
    { code: 'USU00028', names: 'Lucía Cruz', lastName: 'Cruz Ramírez', user: 'lcruzcruz', profile: 'Administrador', active: false },
    { code: 'USU00029', names: 'Jorge Díaz', lastName: 'Pérez Díaz', user: 'jdiazperez', profile: 'Usuario', active: true },
    { code: 'USU00030', names: 'Elena Morales', lastName: 'Vega Torres', user: 'emoralesvega', profile: 'Supervisor', active: true },
  ];

  selectedUsers: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  editUser(item: any) {
    this.router.navigate(['dashboard/seguridad/users/edit/2']);
  }

  clear(table: Table) {
    table.clear();
  }

  deleteUser(item: any) {
    this.confirmationService.confirm({
      header: 'Confirmación',
      message: `¿Seguro que deseas eliminar a ${item.internNumber}?`,
      icon: 'pi pi-exclamation-triangle',
      acceptButtonProps: {
        label: 'Sí, eliminar',
        icon: 'pi pi-check',
        severity: 'danger',
      },
      rejectButtonProps: {
        label: 'Cancelar',
        icon: 'pi pi-times',
        severity: 'secondary',
      },
      accept: () => {
        console.log('Paquete eliminado:', item.internNumber);
      },
    });
  }


  applyFilterGlobal($event: any, stringVal: any) {
    console.log(this.dt);
    if (this.dt) {
      this.dt!.filterGlobal(
        ($event.target as HTMLInputElement).value,
        stringVal
      );
    }
  }



  actionOne(){

  }

  actionTwo(){

  }

  createUser(){
    this.router.navigate(['dashboard/seguridad/users/create'])
  }
}

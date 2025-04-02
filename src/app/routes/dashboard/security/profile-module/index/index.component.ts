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


  profilesModule = [
    { code: 'PEM00001', profile: 'ADMINISTRADOR', module: 'CLIENTES', userCreation: 'Juan Perez', creationAt: '', active: true },
    { code: 'PEM00002', profile: 'USUARIO', module: 'VENTAS', userCreation: 'Maria Lopez', creationAt: '', active: false },
    { code: 'PEM00003', profile: 'SUPERVISOR', module: 'COMPRAS', userCreation: 'Carlos Garcia', creationAt: '', active: true },
    { code: 'PEM00004', profile: 'GERENTE', module: 'INVENTARIO', userCreation: 'Ana Fernandez', creationAt: '', active: true },
    { code: 'PEM00005', profile: 'ASISTENTE', module: 'FACTURACIÓN', userCreation: 'Luis Ramirez', creationAt: '', active: false },
    { code: 'PEM00006', profile: 'COORDINADOR', module: 'RECURSOS HUMANOS', userCreation: 'Sofia Martinez', creationAt: '', active: true },
    { code: 'PEM00007', profile: 'ADMINISTRADOR', module: 'PRODUCCIÓN', userCreation: 'Pedro Castillo', creationAt: '', active: true },
    { code: 'PEM00008', profile: 'USUARIO', module: 'MARKETING', userCreation: 'Jorge Diaz', creationAt: '', active: false },
    { code: 'PEM00009', profile: 'SUPERVISOR', module: 'SOPORTE', userCreation: 'Elena Vargas', creationAt: '', active: true },
    { code: 'PEM00010', profile: 'GERENTE', module: 'PROYECTOS', userCreation: 'Miguel Rojas', creationAt: '', active: true },
    { code: 'PEM00011', profile: 'ASISTENTE', module: 'CALIDAD', userCreation: 'Carmen Diaz', creationAt: '', active: false },
    { code: 'PEM00012', profile: 'COORDINADOR', module: 'AUDITORÍA', userCreation: 'Ricardo Sanchez', creationAt: '', active: true },
    { code: 'PEM00013', profile: 'ADMINISTRADOR', module: 'LOGÍSTICA', userCreation: 'Valeria Morales', creationAt: '', active: true },
    { code: 'PEM00014', profile: 'USUARIO', module: 'ALMACÉN', userCreation: 'Andres Herrera', creationAt: '', active: false },
    { code: 'PEM00015', profile: 'SUPERVISOR', module: 'TRANSPORTE', userCreation: 'Paula Cruz', creationAt: '', active: true },
    { code: 'PEM00016', profile: 'GERENTE', module: 'SEGURIDAD', userCreation: 'Diego Navarro', creationAt: '', active: true },
    { code: 'PEM00017', profile: 'ASISTENTE', module: 'INFRAESTRUCTURA', userCreation: 'Gabriela Paredes', creationAt: '', active: false },
    { code: 'PEM00018', profile: 'COORDINADOR', module: 'DESARROLLO', userCreation: 'Hector Vega', creationAt: '', active: true },
    { code: 'PEM00019', profile: 'ADMINISTRADOR', module: 'INVESTIGACIÓN', userCreation: 'Isabel Flores', creationAt: '', active: true },
    { code: 'PEM00020', profile: 'USUARIO', module: 'LEGAL', userCreation: 'Juan Guerra', creationAt: '', active: false },
    { code: 'PEM00021', profile: 'SUPERVISOR', module: 'RELACIONES PÚBLICAS', userCreation: 'Maria Sanchez', creationAt: '', active: true },
    { code: 'PEM00022', profile: 'GERENTE', module: 'CAPACITACIÓN', userCreation: 'Carlos Torres', creationAt: '', active: true },
    { code: 'PEM00023', profile: 'ASISTENTE', module: 'MANTENIMIENTO', userCreation: 'Ana Lopez', creationAt: '', active: false },
    { code: 'PEM00024', profile: 'COORDINADOR', module: 'DISTRIBUCIÓN', userCreation: 'Luis Fernandez', creationAt: '', active: true },
    { code: 'PEM00025', profile: 'ADMINISTRADOR', module: 'ESTRATEGIA', userCreation: 'Sofia Vargas', creationAt: '', active: true },
    { code: 'PEM00026', profile: 'USUARIO', module: 'ANÁLISIS', userCreation: 'Pedro Gomez', creationAt: '', active: false },
    { code: 'PEM00027', profile: 'SUPERVISOR', module: 'CONSULTORÍA', userCreation: 'Lucia Cruz', creationAt: '', active: true },
    { code: 'PEM00028', profile: 'GERENTE', module: 'RIESGOS', userCreation: 'Jorge Diaz', creationAt: '', active: true },
    { code: 'PEM00029', profile: 'ASISTENTE', module: 'INNOVACIÓN', userCreation: 'Elena Morales', creationAt: '', active: false },
    { code: 'PEM00030', profile: 'COORDINADOR', module: 'FINANZAS', userCreation: 'Carmen Guerra', creationAt: '', active: true },
  ];
  selectedProfilesModule: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  editProfile(item: any) {
    this.router.navigate(['dashboard/security/profiles-module/edit/2']);
  }

  clear(table: Table) {
    table.clear();
  }

  deleteProfile(item: any) {
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
    this.router.navigate(['dashboard/security/profiles-module/create'])
  }
}

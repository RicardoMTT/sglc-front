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


  profiles = [
    { profile: '00001', description: 'Administración', observation: 'Administrador de sistemas', active: true },
    { profile: '00002', description: 'Operaciones', observation: 'Gestión de operaciones', active: true },
    { profile: '00003', description: 'Soporte', observation: 'Soporte técnico y atención al cliente', active: false },
    { profile: '00004', description: 'Ventas', observation: 'Gestión de ventas y clientes', active: true },
    { profile: '00005', description: 'Recursos Humanos', observation: 'Gestión del personal', active: true },
    { profile: '00006', description: 'Finanzas', observation: 'Gestión financiera y contabilidad', active: false },
    { profile: '00007', description: 'Logística', observation: 'Gestión de inventarios y transporte', active: true },
    { profile: '00008', description: 'Marketing', observation: 'Estrategias de marketing y publicidad', active: true },
    { profile: '00009', description: 'Desarrollo', observation: 'Desarrollo de software y sistemas', active: false },
    { profile: '00010', description: 'Atención al Cliente', observation: 'Soporte y atención al cliente', active: true },
    { profile: '00011', description: 'Producción', observation: 'Gestión de procesos productivos', active: true },
    { profile: '00012', description: 'Calidad', observation: 'Control de calidad y auditorías', active: false },
    { profile: '00013', description: 'Compras', observation: 'Gestión de proveedores y compras', active: true },
    { profile: '00014', description: 'Proyectos', observation: 'Gestión de proyectos y planificación', active: true },
    { profile: '00015', description: 'Seguridad', observation: 'Gestión de seguridad y riesgos', active: false },
    { profile: '00016', description: 'Infraestructura', observation: 'Gestión de infraestructura tecnológica', active: true },
    { profile: '00017', description: 'Investigación', observation: 'Investigación y desarrollo', active: true },
    { profile: '00018', description: 'Legal', observation: 'Asesoría legal y cumplimiento', active: false },
    { profile: '00019', description: 'Auditoría', observation: 'Auditorías internas y externas', active: true },
    { profile: '00020', description: 'Innovación', observation: 'Gestión de innovación y creatividad', active: true },
    { profile: '00021', description: 'Planificación', observation: 'Planificación estratégica', active: true },
    { profile: '00022', description: 'Relaciones Públicas', observation: 'Gestión de relaciones públicas', active: false },
    { profile: '00023', description: 'Capacitación', observation: 'Capacitación y desarrollo del personal', active: true },
    { profile: '00024', description: 'Mantenimiento', observation: 'Gestión de mantenimiento', active: true },
    { profile: '00025', description: 'Almacén', observation: 'Gestión de almacenes y stock', active: false },
    { profile: '00026', description: 'Distribución', observation: 'Gestión de distribución y entregas', active: true },
    { profile: '00027', description: 'Estrategia', observation: 'Diseño de estrategias corporativas', active: true },
    { profile: '00028', description: 'Análisis', observation: 'Análisis de datos y reportes', active: false },
    { profile: '00029', description: 'Consultoría', observation: 'Consultoría interna y externa', active: true },
    { profile: '00030', description: 'Gestión de Riesgos', observation: 'Identificación y mitigación de riesgos', active: true },
  ];

  selectedProfiles: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  editProfile(item: any) {
    this.router.navigate(['dashboard/seguridad/profiles/edit/2']);
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
    this.router.navigate(['dashboard/seguridad/profiles/create'])
  }
}

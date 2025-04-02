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
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class IndexComponent {
  @ViewChild('dt') dt: Table | undefined;

  audits = [
    { identification_number: 'ALM00001', username: 'Juan Perez', datetime_entry: '2025-04-01 08:00:00', datetime_departure: '2025-04-01 16:00:00', terminal: '10.1022.33.44', module: 'Paquetes', exchange: true },
    { identification_number: 'ALM00002', username: 'Maria Lopez', datetime_entry: '2025-04-02 09:00:00', datetime_departure: '2025-04-02 17:00:00', terminal: '10.1022.33.45', module: 'Ventas', exchange: false },
    { identification_number: 'ALM00003', username: 'Carlos Garcia', datetime_entry: '2025-04-03 10:00:00', datetime_departure: '2025-04-03 18:00:00', terminal: '10.1022.33.46', module: 'Compras', exchange: true },
    { identification_number: 'ALM00004', username: 'Ana Fernandez', datetime_entry: '2025-04-04 07:30:00', datetime_departure: '2025-04-04 15:30:00', terminal: '10.1022.33.47', module: 'Inventario', exchange: false },
    { identification_number: 'ALM00005', username: 'Luis Ramirez', datetime_entry: '2025-04-05 08:15:00', datetime_departure: '2025-04-05 16:15:00', terminal: '10.1022.33.48', module: 'Facturación', exchange: true },
    { identification_number: 'ALM00006', username: 'Sofia Martinez', datetime_entry: '2025-04-06 09:45:00', datetime_departure: '2025-04-06 17:45:00', terminal: '10.1022.33.49', module: 'Recursos Humanos', exchange: false },
    { identification_number: 'ALM00007', username: 'Pedro Castillo', datetime_entry: '2025-04-07 08:30:00', datetime_departure: '2025-04-07 16:30:00', terminal: '10.1022.33.50', module: 'Producción', exchange: true },
    { identification_number: 'ALM00008', username: 'Jorge Diaz', datetime_entry: '2025-04-08 10:00:00', datetime_departure: '2025-04-08 18:00:00', terminal: '10.1022.33.51', module: 'Marketing', exchange: true },
    { identification_number: 'ALM00009', username: 'Elena Vargas', datetime_entry: '2025-04-09 07:45:00', datetime_departure: '2025-04-09 15:45:00', terminal: '10.1022.33.52', module: 'Soporte', exchange: true },
    { identification_number: 'ALM00010', username: 'Miguel Rojas', datetime_entry: '2025-04-10 08:00:00', datetime_departure: '2025-04-10 16:00:00', terminal: '10.1022.33.53', module: 'Proyectos', exchange: false },
    { identification_number: 'ALM00011', username: 'Carmen Diaz', datetime_entry: '2025-04-11 09:00:00', datetime_departure: '2025-04-11 17:00:00', terminal: '10.1022.33.54', module: 'Calidad', exchange: true },
    { identification_number: 'ALM00012', username: 'Ricardo Sanchez', datetime_entry: '2025-04-12 10:30:00', datetime_departure: '2025-04-12 18:30:00', terminal: '10.1022.33.55', module: 'Auditoría', exchange: false },
    { identification_number: 'ALM00013', username: 'Valeria Morales', datetime_entry: '2025-04-13 08:15:00', datetime_departure: '2025-04-13 16:15:00', terminal: '10.1022.33.56', module: 'Logística', exchange: true },
    { identification_number: 'ALM00014', username: 'Andres Herrera', datetime_entry: '2025-04-14 07:30:00', datetime_departure: '2025-04-14 15:30:00', terminal: '10.1022.33.57', module: 'Almacén', exchange: false },
    { identification_number: 'ALM00015', username: 'Paula Cruz', datetime_entry: '2025-04-15 09:45:00', datetime_departure: '2025-04-15 17:45:00', terminal: '10.1022.33.58', module: 'Transporte', exchange: true },
    { identification_number: 'ALM00016', username: 'Diego Navarro', datetime_entry: '2025-04-16 08:30:00', datetime_departure: '2025-04-16 16:30:00', terminal: '10.1022.33.59', module: 'Seguridad', exchange: false },
    { identification_number: 'ALM00017', username: 'Gabriela Paredes', datetime_entry: '2025-04-17 10:00:00', datetime_departure: '2025-04-17 18:00:00', terminal: '10.1022.33.60', module: 'Infraestructura', exchange: true },
    { identification_number: 'ALM00018', username: 'Hector Vega', datetime_entry: '2025-04-18 07:45:00', datetime_departure: '2025-04-18 15:45:00', terminal: '10.1022.33.61', module: 'Desarrollo', exchange: true },
    { identification_number: 'ALM00019', username: 'Isabel Flores', datetime_entry: '2025-04-19 08:00:00', datetime_departure: '2025-04-19 16:00:00', terminal: '10.1022.33.62', module: 'Investigación', exchange: false },
    { identification_number: 'ALM00020', username: 'Juan Guerra', datetime_entry: '2025-04-20 09:00:00', datetime_departure: '2025-04-20 17:00:00', terminal: '10.1022.33.63', module: 'Legal', exchange: true },
    { identification_number: 'ALM00021', username: 'Maria Sanchez', datetime_entry: '2025-04-21 10:30:00', datetime_departure: '2025-04-21 18:30:00', terminal: '10.1022.33.64', module: 'Relaciones Públicas', exchange: false },
    { identification_number: 'ALM00022', username: 'Carlos Torres', datetime_entry: '2025-04-22 08:15:00', datetime_departure: '2025-04-22 16:15:00', terminal: '10.1022.33.65', module: 'Capacitación', exchange: true },
    { identification_number: 'ALM00023', username: 'Ana Lopez', datetime_entry: '2025-04-23 07:30:00', datetime_departure: '2025-04-23 15:30:00', terminal: '10.1022.33.66', module: 'Mantenimiento', exchange: false },
    { identification_number: 'ALM00024', username: 'Luis Fernandez', datetime_entry: '2025-04-24 09:45:00', datetime_departure: '2025-04-24 17:45:00', terminal: '10.1022.33.67', module: 'Distribución', exchange: true },
    { identification_number: 'ALM00025', username: 'Sofia Vargas', datetime_entry: '2025-04-25 08:30:00', datetime_departure: '2025-04-25 16:30:00', terminal: '10.1022.33.68', module: 'Estrategia', exchange: false },
    { identification_number: 'ALM00026', username: 'Pedro Gomez', datetime_entry: '2025-04-26 10:00:00', datetime_departure: '2025-04-26 18:00:00', terminal: '10.1022.33.69', module: 'Análisis', exchange: true },
    { identification_number: 'ALM00027', username: 'Lucia Cruz', datetime_entry: '2025-04-27 07:45:00', datetime_departure: '2025-04-27 15:45:00', terminal: '10.1022.33.70', module: 'Consultoría', exchange: true },
    { identification_number: 'ALM00028', username: 'Jorge Diaz', datetime_entry: '2025-04-28 08:00:00', datetime_departure: '2025-04-28 16:00:00', terminal: '10.1022.33.71', module: 'Riesgos', exchange: false },
    { identification_number: 'ALM00029', username: 'Elena Morales', datetime_entry: '2025-04-29 09:00:00', datetime_departure: '2025-04-29 17:00:00', terminal: '10.1022.33.72', module: 'Innovación', exchange: true },
    { identification_number: 'ALM00030', username: 'Carmen Guerra', datetime_entry: '2025-04-30 10:30:00', datetime_departure: '2025-04-30 18:30:00', terminal: '10.1022.33.73', module: 'Finanzas', exchange: true },
  ];
  selectedAudits: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  editAudit(item: any) {
    this.router.navigate(['dashboard/settings/audits/edit/2']);
  }

  clear(table: Table) {
    table.clear();
  }

  deleteAudit(item: any) {
    this.confirmationService.confirm({
      header: 'Confirmación',
      message: `¿Seguro que deseas eliminar a ${item.code}?`,
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

  createAudit(){
    this.router.navigate(['dashboard/settings/audits/create'])
  }
}

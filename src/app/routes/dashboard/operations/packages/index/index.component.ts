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

  packages = [
    { internNumber: 'PCK00001', tracking: 'FMX99995858501', sender: 'Jan Guerra', receiver: 'Elvis Castello', dateAndTime: '2025-03-01 10:00', active: true },
    { internNumber: 'PCK00002', tracking: 'FMX99995858502', sender: 'Maria Lopez', receiver: 'Carlos Perez', dateAndTime: '2025-03-02 11:00', active: false },
    { internNumber: 'PCK00003', tracking: 'FMX99995858503', sender: 'Luis Fernandez', receiver: 'Ana Torres', dateAndTime: '2025-03-03 12:00', active: true },
    { internNumber: 'PCK00004', tracking: 'FMX99995858504', sender: 'Sofia Martinez', receiver: 'Pedro Castillo', dateAndTime: '2025-03-04 13:00', active: true },
    { internNumber: 'PCK00005', tracking: 'FMX99995858505', sender: 'Jorge Ramirez', receiver: 'Lucia Gomez', dateAndTime: '2025-03-05 14:00', active: false },
    { internNumber: 'PCK00006', tracking: 'FMX99995858506', sender: 'Elena Vargas', receiver: 'Miguel Rojas', dateAndTime: '2025-03-06 15:00', active: true },
    { internNumber: 'PCK00007', tracking: 'FMX99995858507', sender: 'Carmen Diaz', receiver: 'Ricardo Sanchez', dateAndTime: '2025-03-07 16:00', active: true },
    { internNumber: 'PCK00008', tracking: 'FMX99995858508', sender: 'Valeria Morales', receiver: 'Andres Herrera', dateAndTime: '2025-03-08 17:00', active: false },
    { internNumber: 'PCK00009', tracking: 'FMX99995858509', sender: 'Paula Cruz', receiver: 'Diego Navarro', dateAndTime: '2025-03-09 18:00', active: true },
    { internNumber: 'PCK00010', tracking: 'FMX99995858510', sender: 'Gabriela Paredes', receiver: 'Hector Vega', dateAndTime: '2025-03-10 19:00', active: true },
    { internNumber: 'PCK00011', tracking: 'FMX99995858511', sender: 'Isabel Flores', receiver: 'Juan Perez', dateAndTime: '2025-03-11 20:00', active: false },
    { internNumber: 'PCK00012', tracking: 'FMX99995858512', sender: 'Carlos Garcia', receiver: 'Ana Lopez', dateAndTime: '2025-03-12 21:00', active: true },
    { internNumber: 'PCK00013', tracking: 'FMX99995858513', sender: 'Luis Torres', receiver: 'Maria Sanchez', dateAndTime: '2025-03-13 22:00', active: true },
    { internNumber: 'PCK00014', tracking: 'FMX99995858514', sender: 'Pedro Ramirez', receiver: 'Sofia Vargas', dateAndTime: '2025-03-14 23:00', active: false },
    { internNumber: 'PCK00015', tracking: 'FMX99995858515', sender: 'Lucia Herrera', receiver: 'Jorge Diaz', dateAndTime: '2025-03-15 08:00', active: true },
    { internNumber: 'PCK00016', tracking: 'FMX99995858516', sender: 'Miguel Cruz', receiver: 'Elena Morales', dateAndTime: '2025-03-16 09:00', active: true },
    { internNumber: 'PCK00017', tracking: 'FMX99995858517', sender: 'Carmen Vega', receiver: 'Valeria Paredes', dateAndTime: '2025-03-17 10:00', active: false },
    { internNumber: 'PCK00018', tracking: 'FMX99995858518', sender: 'Ricardo Flores', receiver: 'Paula Navarro', dateAndTime: '2025-03-18 11:00', active: true },
    { internNumber: 'PCK00019', tracking: 'FMX99995858519', sender: 'Andres Sanchez', receiver: 'Gabriela Vega', dateAndTime: '2025-03-19 12:00', active: true },
    { internNumber: 'PCK00020', tracking: 'FMX99995858520', sender: 'Diego Lopez', receiver: 'Isabel Torres', dateAndTime: '2025-03-20 13:00', active: false },
    { internNumber: 'PCK00021', tracking: 'FMX99995858521', sender: 'Hector Perez', receiver: 'Carlos Vargas', dateAndTime: '2025-03-21 14:00', active: true },
    { internNumber: 'PCK00022', tracking: 'FMX99995858522', sender: 'Juan Guerra', receiver: 'Luis Ramirez', dateAndTime: '2025-03-22 15:00', active: true },
    { internNumber: 'PCK00023', tracking: 'FMX99995858523', sender: 'Ana Castillo', receiver: 'Pedro Gomez', dateAndTime: '2025-03-23 16:00', active: false },
    { internNumber: 'PCK00024', tracking: 'FMX99995858524', sender: 'Maria Herrera', receiver: 'Lucia Cruz', dateAndTime: '2025-03-24 17:00', active: true },
    { internNumber: 'PCK00025', tracking: 'FMX99995858525', sender: 'Carlos Vega', receiver: 'Miguel Paredes', dateAndTime: '2025-03-25 18:00', active: true },
    { internNumber: 'PCK00026', tracking: 'FMX99995858526', sender: 'Luis Flores', receiver: 'Carmen Navarro', dateAndTime: '2025-03-26 19:00', active: false },
    { internNumber: 'PCK00027', tracking: 'FMX99995858527', sender: 'Pedro Sanchez', receiver: 'Andres Vega', dateAndTime: '2025-03-27 20:00', active: true },
    { internNumber: 'PCK00028', tracking: 'FMX99995858528', sender: 'Lucia Lopez', receiver: 'Diego Torres', dateAndTime: '2025-03-28 21:00', active: true },
    { internNumber: 'PCK00029', tracking: 'FMX99995858529', sender: 'Miguel Perez', receiver: 'Hector Vargas', dateAndTime: '2025-03-29 22:00', active: false },
    { internNumber: 'PCK00030', tracking: 'FMX99995858530', sender: 'Carmen Guerra', receiver: 'Juan Castillo', dateAndTime: '2025-03-30 23:00', active: true },
  ];
  selectedPackages: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  editPackage(item: any) {
    this.router.navigate(['dashboard/operaciones/paquetes/edit/2']);
  }

  clear(table: Table) {
    table.clear();
  }

  deletePackage(item: any) {
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

  createPackage(){
    this.router.navigate(['dashboard/operaciones/paquetes/create'])
  }
}

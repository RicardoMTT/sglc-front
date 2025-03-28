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
  @ViewChild('dt2') dt2: Table | undefined;

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

  clients = [
    { id: 1, clientNumber: 'CLT00001', names: 'Juan Pérez', clientType: 'Vendedor', documentType: 'DNI', documentNumber: '776949545', active: true },
    { id: 2, clientNumber: 'CLT00002', names: 'María López', clientType: 'Comprador', documentType: 'DNI', documentNumber: '123456789', active: true },
    { id: 3, clientNumber: 'CLT00003', names: 'Carlos García', clientType: 'Vendedor', documentType: 'RUC', documentNumber: '20123456789', active: false },
    { id: 4, clientNumber: 'CLT00004', names: 'Ana Torres', clientType: 'Comprador', documentType: 'DNI', documentNumber: '987654321', active: true },
    { id: 5, clientNumber: 'CLT00005', names: 'Luis Fernández', clientType: 'Vendedor', documentType: 'DNI', documentNumber: '456789123', active: false },
    { id: 6, clientNumber: 'CLT00006', names: 'Sofía Martínez', clientType: 'Comprador', documentType: 'RUC', documentNumber: '20567891234', active: true },
    { id: 7, clientNumber: 'CLT00007', names: 'Pedro Castillo', clientType: 'Vendedor', documentType: 'DNI', documentNumber: '321654987', active: true },
    { id: 8, clientNumber: 'CLT00008', names: 'Lucía Gómez', clientType: 'Comprador', documentType: 'DNI', documentNumber: '654987321', active: false },
    { id: 9, clientNumber: 'CLT00009', names: 'Jorge Ramírez', clientType: 'Vendedor', documentType: 'RUC', documentNumber: '20987654321', active: true },
    { id: 10, clientNumber: 'CLT00010', names: 'Elena Vargas', clientType: 'Comprador', documentType: 'DNI', documentNumber: '789123456', active: true },
    { id: 11, clientNumber: 'CLT00011', names: 'Miguel Rojas', clientType: 'Vendedor', documentType: 'DNI', documentNumber: '112233445', active: false },
    { id: 12, clientNumber: 'CLT00012', names: 'Carmen Díaz', clientType: 'Comprador', documentType: 'RUC', documentNumber: '20111223344', active: true },
    { id: 13, clientNumber: 'CLT00013', names: 'Ricardo Sánchez', clientType: 'Vendedor', documentType: 'DNI', documentNumber: '998877665', active: true },
    { id: 14, clientNumber: 'CLT00014', names: 'Valeria Morales', clientType: 'Comprador', documentType: 'DNI', documentNumber: '776655443', active: false },
    { id: 15, clientNumber: 'CLT00015', names: 'Andrés Herrera', clientType: 'Vendedor', documentType: 'RUC', documentNumber: '20776655443', active: true },
    { id: 16, clientNumber: 'CLT00016', names: 'Paula Cruz', clientType: 'Comprador', documentType: 'DNI', documentNumber: '334455667', active: true },
    { id: 17, clientNumber: 'CLT00017', names: 'Diego Navarro', clientType: 'Vendedor', documentType: 'DNI', documentNumber: '556677889', active: false },
    { id: 18, clientNumber: 'CLT00018', names: 'Gabriela Paredes', clientType: 'Comprador', documentType: 'RUC', documentNumber: '20889977665', active: true },
    { id: 19, clientNumber: 'CLT00019', names: 'Héctor Vega', clientType: 'Vendedor', documentType: 'DNI', documentNumber: '667788990', active: true },
    { id: 20, clientNumber: 'CLT00020', names: 'Isabel Flores', clientType: 'Comprador', documentType: 'DNI', documentNumber: '445566778', active: true },
    { id: 21, clientNumber: 'CLT00021', names: 'Juan Guerra', clientType: 'Vendedor', documentType: 'DNI', documentNumber: '123123123', active: true },
    { id: 22, clientNumber: 'CLT00022', names: 'María Sánchez', clientType: 'Comprador', documentType: 'RUC', documentNumber: '20112312312', active: false },
    { id: 23, clientNumber: 'CLT00023', names: 'Carlos Torres', clientType: 'Vendedor', documentType: 'DNI', documentNumber: '987987987', active: true },
    { id: 24, clientNumber: 'CLT00024', names: 'Ana López', clientType: 'Comprador', documentType: 'DNI', documentNumber: '654654654', active: true },
    { id: 25, clientNumber: 'CLT00025', names: 'Luis Ramírez', clientType: 'Vendedor', documentType: 'RUC', documentNumber: '20987654322', active: false },
    { id: 26, clientNumber: 'CLT00026', names: 'Sofía Vargas', clientType: 'Comprador', documentType: 'DNI', documentNumber: '321321321', active: true },
    { id: 27, clientNumber: 'CLT00027', names: 'Pedro Gómez', clientType: 'Vendedor', documentType: 'DNI', documentNumber: '456456456', active: true },
    { id: 28, clientNumber: 'CLT00028', names: 'Lucía Cruz', clientType: 'Comprador', documentType: 'RUC', documentNumber: '20145645645', active: false },
    { id: 29, clientNumber: 'CLT00029', names: 'Jorge Díaz', clientType: 'Vendedor', documentType: 'DNI', documentNumber: '789789789', active: true },
    { id: 30, clientNumber: 'CLT00030', names: 'Elena Morales', clientType: 'Comprador', documentType: 'DNI', documentNumber: '123789456', active: true },
  ];

  selectedClients: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  editClient(client: any) {
    console.log('Editando cliente:', client);
    this.router.navigate(['dashboard/operaciones/clientes/edit/2']);
    // Lógica para editar cliente
  }
  deleteClient(client: any) {
    this.confirmationService.confirm({
      header: 'Confirmación',
      message: `¿Seguro que deseas eliminar a ${client.names}?`,
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
        console.log('Cliente eliminado:', client);
        // Lógica para eliminar cliente aquí
      },
    });
  }


  applyFilterGlobal($event: any, stringVal: any) {
    console.log(this.dt2);
    if (this.dt2) {
      this.dt2!.filterGlobal(
        ($event.target as HTMLInputElement).value,
        stringVal
      );
    }
  }

  createClient() {
    this.router.navigate(['/dashboard/operaciones/clientes/create']);
  }

  actionOne(){
    console.log('eliminando');

  }

  onSelectionChange(event: any) {
    console.log('Seleccionados:', event);
  }

  actionTwo(){
    console.log('exportando...');
  }


  clear(table: Table) {
    table.clear();
  }
}

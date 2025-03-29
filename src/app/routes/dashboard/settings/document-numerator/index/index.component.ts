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


  documents = [
    { id: '0001415013', prefix: 'Moneda', number: 'Sol', moduleName: 'S/', creationDate: '', active: true },
    { id: '0002345013', prefix: 'Moneda', number: 'Dólar', moduleName: '$', creationDate: '', active: true },
    { id: '0003415013', prefix: 'Moneda', number: 'Euro', moduleName: '€', creationDate: '', active: true },
    { id: '0004415013', prefix: 'Moneda', number: 'Libra', moduleName: '£', creationDate: '', active: false },
    { id: '0005415013', prefix: 'Moneda', number: 'Yen', moduleName: '¥', creationDate: '', active: true },
    { id: '0006415013', prefix: 'Moneda', number: 'Franco Suizo', moduleName: 'CHF', creationDate: '', active: true },
    { id: '0007415013', prefix: 'Moneda', number: 'Dólar Canadiense', moduleName: 'CAD', creationDate: '', active: false },
    { id: '0008415013', prefix: 'Moneda', number: 'Peso Mexicano', moduleName: 'MXN', creationDate: '', active: true },
    { id: '0009415013', prefix: 'Moneda', number: 'Real Brasileño', moduleName: 'R$', creationDate: '', active: true },
    { id: '0010415013', prefix: 'Moneda', number: 'Peso Argentino', moduleName: 'ARS', creationDate: '', active: false },
    { id: '0011415013', prefix: 'Moneda', number: 'Rublo', moduleName: '₽', creationDate: '', active: true },
    { id: '0012415013', prefix: 'Moneda', number: 'Won', moduleName: '₩', creationDate: '', active: true },
    { id: '0013415013', prefix: 'Moneda', number: 'Rupia India', moduleName: '₹', creationDate: '', active: false },
    { id: '0014415013', prefix: 'Moneda', number: 'Dólar Australiano', moduleName: 'AUD', creationDate: '', active: true },
    { id: '0015415013', prefix: 'Moneda', number: 'Dólar Neozelandés', moduleName: 'NZD', creationDate: '', active: true },
    { id: '0016415013', prefix: 'Moneda', number: 'Yuan', moduleName: '¥', creationDate: '', active: false },
    { id: '0017415013', prefix: 'Moneda', number: 'Corona Sueca', moduleName: 'SEK', creationDate: '', active: true },
    { id: '0018415013', prefix: 'Moneda', number: 'Corona Noruega', moduleName: 'NOK', creationDate: '', active: true },
    { id: '0019415013', prefix: 'Moneda', number: 'Corona Danesa', moduleName: 'DKK', creationDate: '', active: false },
    { id: '0020415013', prefix: 'Moneda', number: 'Zloty Polaco', moduleName: 'PLN', creationDate: '', active: true },
    { id: '0021415013', prefix: 'Moneda', number: 'Forinto Húngaro', moduleName: 'HUF', creationDate: '', active: true },
    { id: '0022415013', prefix: 'Moneda', number: 'Shekel Israelí', moduleName: '₪', creationDate: '', active: false },
    { id: '0023415013', prefix: 'Moneda', number: 'Dólar Singapurense', moduleName: 'SGD', creationDate: '', active: true },
    { id: '0024415013', prefix: 'Moneda', number: 'Ringgit Malayo', moduleName: 'MYR', creationDate: '', active: true },
    { id: '0025415013', prefix: 'Moneda', number: 'Baht Tailandés', moduleName: '฿', creationDate: '', active: false },
    { id: '0026415013', prefix: 'Moneda', number: 'Peso Chileno', moduleName: 'CLP', creationDate: '', active: true },
    { id: '0027415013', prefix: 'Moneda', number: 'Peso Colombiano', moduleName: 'COP', creationDate: '', active: true },
    { id: '0028415013', prefix: 'Moneda', number: 'Peso Uruguayo', moduleName: 'UYU', creationDate: '', active: false },
    { id: '0029415013', prefix: 'Moneda', number: 'Boliviano', moduleName: 'BOB', creationDate: '', active: true },
    { id: '0030415013', prefix: 'Moneda', number: 'Guaraní', moduleName: 'PYG', creationDate: '', active: true },
  ];

  selectedDocuments: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  editDocument(item: any) {
    this.router.navigate(['dashboard/settings/documents-generator/edit/2']);
  }

  clear(table: Table) {
    table.clear();
  }

  deleteDocument(item: any) {
    this.confirmationService.confirm({
      header: 'Confirmación',
      message: `¿Seguro que deseas eliminar a ${item.id}?`,
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

  createParameter(){
    this.router.navigate(['dashboard/settings/documents-generator/create'])
  }
}

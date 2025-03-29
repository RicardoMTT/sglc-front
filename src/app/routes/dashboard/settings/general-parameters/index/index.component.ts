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


  parameters = [
    { code: '0001415013', name: 'Moneda', value: 'Sol', firstValue: 'S/', secondValue: '', active: true },
    { code: '0002345013', name: 'Moneda', value: 'Dolar', firstValue: '$', secondValue: '', active: true },
    { code: '0003415013', name: 'Moneda', value: 'Euro', firstValue: '€', secondValue: '', active: true },
    { code: '0004415013', name: 'Moneda', value: 'Libra', firstValue: '£', secondValue: '', active: false },
    { code: '0005415013', name: 'Moneda', value: 'Yen', firstValue: '¥', secondValue: '', active: true },
    { code: '0006415013', name: 'Moneda', value: 'Franco Suizo', firstValue: 'CHF', secondValue: '', active: true },
    { code: '0007415013', name: 'Dolar', value: 'Dólar Canadiense', firstValue: 'CAD', secondValue: '', active: false },
    { code: '0008415013', name: 'Dolar', value: 'Peso Mexicano', firstValue: 'MXN', secondValue: '', active: true },
    { code: '0009415013', name: 'Moneda', value: 'Real Brasileño', firstValue: 'R$', secondValue: '', active: true },
    { code: '0010415013', name: 'Moneda', value: 'Peso Argentino', firstValue: 'ARS', secondValue: '', active: false },
    { code: '0011415013', name: 'Moneda', value: 'Rublo', firstValue: '₽', secondValue: '', active: true },
    { code: '0012415013', name: 'Moneda', value: 'Won', firstValue: '₩', secondValue: '', active: true },
    { code: '0013415013', name: 'Moneda', value: 'Rupia India', firstValue: '₹', secondValue: '', active: false },
    { code: '0014415013', name: 'Moneda', value: 'Dólar Australiano', firstValue: 'AUD', secondValue: '', active: true },
    { code: '0015415013', name: 'Moneda', value: 'Dólar Neozelandés', firstValue: 'NZD', secondValue: '', active: true },
    { code: '0016415013', name: 'Moneda', value: 'Yuan', firstValue: '¥', secondValue: '', active: false },
    { code: '0017415013', name: 'Moneda', value: 'Corona Sueca', firstValue: 'SEK', secondValue: '', active: true },
    { code: '0018415013', name: 'Moneda', value: 'Corona Noruega', firstValue: 'NOK', secondValue: '', active: true },
    { code: '0019415013', name: 'Moneda', value: 'Corona Danesa', firstValue: 'DKK', secondValue: '', active: false },
    { code: '0020415013', name: 'Moneda', value: 'Zloty Polaco', firstValue: 'PLN', secondValue: '', active: true },
    { code: '0021415013', name: 'Moneda', value: 'Forinto Húngaro', firstValue: 'HUF', secondValue: '', active: true },
    { code: '0022415013', name: 'Moneda', value: 'Shekel Israelí', firstValue: '₪', secondValue: '', active: false },
    { code: '0023415013', name: 'Moneda', value: 'Dólar Singapurense', firstValue: 'SGD', secondValue: '', active: true },
    { code: '0024415013', name: 'Moneda', value: 'Ringgit Malayo', firstValue: 'MYR', secondValue: '', active: true },
    { code: '0025415013', name: 'Moneda', value: 'Baht Tailandés', firstValue: '฿', secondValue: '', active: false },
    { code: '0026415013', name: 'Moneda', value: 'Peso Chileno', firstValue: 'CLP', secondValue: '', active: true },
    { code: '0027415013', name: 'Moneda', value: 'Peso Colombiano', firstValue: 'COP', secondValue: '', active: true },
    { code: '0028415013', name: 'Moneda', value: 'Peso Uruguayo', firstValue: 'UYU', secondValue: '', active: false },
    { code: '0029415013', name: 'Moneda', value: 'Boliviano', firstValue: 'BOB', secondValue: '', active: true },
    { code: '0030415013', name: 'Moneda', value: 'Guaraní', firstValue: 'PYG', secondValue: '', active: true },
  ];

  selectedParameters: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  editParameter(item: any) {
    this.router.navigate(['dashboard/settings/general-parameters/edit/2']);
  }

  clear(table: Table) {
    table.clear();
  }

  deleteParameter(item: any) {
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

  createParameter(){
    this.router.navigate(['dashboard/settings/general-parameters/create'])
  }
}

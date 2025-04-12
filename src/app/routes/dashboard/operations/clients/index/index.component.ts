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
import { ApiService } from '../../../../../core/services/api.service';

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

  clients:any[] = [];

  selectedClients: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.index();
  }

  index(){
    this.apiService.getClients().subscribe((res:any) => {
      this.clients = res.data;
      const newClients = this.clients.map((client:any) => {
        return {
          ...client,
          active:client.activo == "1" ? true : false
        }
      });
      this.clients = newClients;
    },
    (error:any) => {
      console.log('error',error);
    });

  }

  editClient(client: any) {
    this.router.navigate(['dashboard/operations/clients/edit/2']);
    // Lógica para editar cliente
  }



  applyFilterGlobal($event: any, stringVal: any) {
    if (this.dt2) {
      this.dt2!.filterGlobal(
        ($event.target as HTMLInputElement).value,
        stringVal
      );
    }
  }

  createClient() {
    this.router.navigate(['/dashboard/operations/clients/create']);
  }

  actionOne(){
    console.log('eliminando');

  }



  actionTwo(){
    console.log('exportando...');
  }


  clear(table: Table) {
    table.clear();
  }
}

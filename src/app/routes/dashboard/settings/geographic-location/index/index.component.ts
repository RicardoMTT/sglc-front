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

  elements = [
    { id: '0001415013', department: 'Lima', province: 'Lima', district: 'Surco', creationDate: '', active: true },
    { id: '0001415014', department: 'Lima', province: 'Lima', district: 'Miraflores', creationDate: '', active: true },
    { id: '0001415015', department: 'Lima', province: 'Lima', district: 'San Isidro', creationDate: '', active: false },
    { id: '0001415016', department: 'Lima', province: 'Lima', district: 'Barranco', creationDate: '', active: true },
    { id: '0001415017', department: 'Lima', province: 'Lima', district: 'Chorrillos', creationDate: '', active: true },
    { id: '0001415018', department: 'Lima', province: 'Lima', district: 'San Borja', creationDate: '', active: false },
    { id: '0001415019', department: 'Lima', province: 'Lima', district: 'La Molina', creationDate: '', active: true },
    { id: '0001415020', department: 'Lima', province: 'Lima', district: 'Pueblo Libre', creationDate: '', active: true },
    { id: '0001415021', department: 'Lima', province: 'Lima', district: 'Jesús María', creationDate: '', active: false },
    { id: '0001415022', department: 'Lima', province: 'Lima', district: 'San Miguel', creationDate: '', active: true },
    { id: '0001415023', department: 'Lima', province: 'Lima', district: 'Rímac', creationDate: '', active: true },
    { id: '0001415024', department: 'Lima', province: 'Lima', district: 'Comas', creationDate: '', active: false },
    { id: '0001415025', department: 'Lima', province: 'Lima', district: 'Los Olivos', creationDate: '', active: true },
    { id: '0001415026', department: 'Lima', province: 'Lima', district: 'San Martín de Porres', creationDate: '', active: true },
    { id: '0001415027', department: 'Lima', province: 'Lima', district: 'Independencia', creationDate: '', active: false },
    { id: '0001415028', department: 'Lima', province: 'Lima', district: 'Villa El Salvador', creationDate: '', active: true },
    { id: '0001415029', department: 'Lima', province: 'Lima', district: 'Villa María del Triunfo', creationDate: '', active: true },
    { id: '0001415030', department: 'Lima', province: 'Lima', district: 'San Juan de Miraflores', creationDate: '', active: false },
    { id: '0001415031', department: 'Lima', province: 'Lima', district: 'San Juan de Lurigancho', creationDate: '', active: true },
    { id: '0001415032', department: 'Lima', province: 'Lima', district: 'El Agustino', creationDate: '', active: true },
    { id: '0001415033', department: 'Lima', province: 'Lima', district: 'Ate', creationDate: '', active: false },
    { id: '0001415034', department: 'Lima', province: 'Lima', district: 'Santa Anita', creationDate: '', active: true },
    { id: '0001415035', department: 'Lima', province: 'Lima', district: 'Cieneguilla', creationDate: '', active: true },
    { id: '0001415036', department: 'Lima', province: 'Lima', district: 'Lurín', creationDate: '', active: false },
    { id: '0001415037', department: 'Lima', province: 'Lima', district: 'Pachacámac', creationDate: '', active: true },
    { id: '0001415038', department: 'Lima', province: 'Lima', district: 'Punta Hermosa', creationDate: '', active: true },
    { id: '0001415039', department: 'Lima', province: 'Lima', district: 'Punta Negra', creationDate: '', active: false },
    { id: '0001415040', department: 'Lima', province: 'Lima', district: 'San Bartolo', creationDate: '', active: true },
    { id: '0001415041', department: 'Lima', province: 'Lima', district: 'Santa María del Mar', creationDate: '', active: true },
    { id: '0001415042', department: 'Lima', province: 'Lima', district: 'Ancón', creationDate: '', active: false },
  ];

  selectedItems: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  editItem(item: any) {
    this.router.navigate(['dashboard/settings/geographic-location/edit/2']);
  }

  clear(table: Table) {
    table.clear();
  }

  deleteItem(item: any) {
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

  createItem(){
    this.router.navigate(['dashboard/settings/geographic-location/create'])
  }
}

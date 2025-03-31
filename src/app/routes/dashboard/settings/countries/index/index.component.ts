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

  countries = [
    { id: '0001415013', country_name: 'Perú', created_by_user: 'juan torres', creation_date: '', updated_at: '', active: true },
    { id: '0001415014', country_name: 'Argentina', created_by_user: 'maria lopez', creation_date: '', updated_at: '', active: true },
    { id: '0001415015', country_name: 'Chile', created_by_user: 'carlos garcia', creation_date: '', updated_at: '', active: false },
    { id: '0001415016', country_name: 'Brasil', created_by_user: 'ana fernandez', creation_date: '', updated_at: '', active: true },
    { id: '0001415017', country_name: 'Colombia', created_by_user: 'luis ramirez', creation_date: '', updated_at: '', active: true },
    { id: '0001415018', country_name: 'Ecuador', created_by_user: 'sofia martinez', creation_date: '', updated_at: '', active: false },
    { id: '0001415019', country_name: 'Uruguay', created_by_user: 'pedro castillo', creation_date: '', updated_at: '', active: true },
    { id: '0001415020', country_name: 'Paraguay', created_by_user: 'jorge diaz', creation_date: '', updated_at: '', active: true },
    { id: '0001415021', country_name: 'Bolivia', created_by_user: 'elena vargas', creation_date: '', updated_at: '', active: false },
    { id: '0001415022', country_name: 'Venezuela', created_by_user: 'miguel rojas', creation_date: '', updated_at: '', active: true },
    { id: '0001415023', country_name: 'México', created_by_user: 'carmen diaz', creation_date: '', updated_at: '', active: true },
    { id: '0001415024', country_name: 'Panamá', created_by_user: 'ricardo sanchez', creation_date: '', updated_at: '', active: false },
    { id: '0001415025', country_name: 'Costa Rica', created_by_user: 'valeria morales', creation_date: '', updated_at: '', active: true },
    { id: '0001415026', country_name: 'Cuba', created_by_user: 'andres herrera', creation_date: '', updated_at: '', active: true },
    { id: '0001415027', country_name: 'Honduras', created_by_user: 'paula cruz', creation_date: '', updated_at: '', active: false },
    { id: '0001415028', country_name: 'El Salvador', created_by_user: 'diego navarro', creation_date: '', updated_at: '', active: true },
    { id: '0001415029', country_name: 'Guatemala', created_by_user: 'gabriela paredes', creation_date: '', updated_at: '', active: true },
    { id: '0001415030', country_name: 'Nicaragua', created_by_user: 'hector vega', creation_date: '', updated_at: '', active: false },
    { id: '0001415031', country_name: 'República Dominicana', created_by_user: 'isabel flores', creation_date: '', updated_at: '', active: true },
    { id: '0001415032', country_name: 'Puerto Rico', created_by_user: 'juan guerra', creation_date: '', updated_at: '', active: true },
    { id: '0001415033', country_name: 'España', created_by_user: 'maria sanchez', creation_date: '', updated_at: '', active: false },
    { id: '0001415034', country_name: 'Portugal', created_by_user: 'carlos torres', creation_date: '', updated_at: '', active: true },
    { id: '0001415035', country_name: 'Italia', created_by_user: 'ana lopez', creation_date: '', updated_at: '', active: true },
    { id: '0001415036', country_name: 'Francia', created_by_user: 'luis fernandez', creation_date: '', updated_at: '', active: false },
    { id: '0001415037', country_name: 'Alemania', created_by_user: 'sofia vargas', creation_date: '', updated_at: '', active: true },
    { id: '0001415038', country_name: 'Reino Unido', created_by_user: 'pedro gomez', creation_date: '', updated_at: '', active: true },
    { id: '0001415039', country_name: 'Canadá', created_by_user: 'lucia cruz', creation_date: '', updated_at: '', active: false },
    { id: '0001415040', country_name: 'Estados Unidos', created_by_user: 'jorge diaz', creation_date: '', updated_at: '', active: true },
    { id: '0001415041', country_name: 'Australia', created_by_user: 'elena morales', creation_date: '', updated_at: '', active: true },
    { id: '0001415042', country_name: 'Nueva Zelanda', created_by_user: 'carmen guerra', creation_date: '', updated_at: '', active: false },
  ];

  selectedCountries: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  editCountry(item: any) {
    this.router.navigate(['dashboard/settings/countries/edit/2']);
  }

  clear(table: Table) {
    table.clear();
  }

  deleteCountry(item: any) {
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

  createCountry(){
    this.router.navigate(['dashboard/settings/countries/create'])
  }
}

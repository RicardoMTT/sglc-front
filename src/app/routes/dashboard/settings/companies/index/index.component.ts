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

  companies = [
    { code: '0001415013', company_name: 'Peru Courier', email: 'pcourier@gmail.com', company_address: 'Av. La Marina 23', company_type: 'Master', active: true },
    { code: '0001415014', company_name: 'Express Logistics', email: 'elogistics@gmail.com', company_address: 'Av. Javier Prado 456', company_type: 'Branch', active: true },
    { code: '0001415015', company_name: 'Global Shipping', email: 'gshipping@gmail.com', company_address: 'Calle Los Olivos 123', company_type: 'Master', active: false },
    { code: '0001415016', company_name: 'Fast Delivery', email: 'fastdelivery@gmail.com', company_address: 'Av. Arequipa 789', company_type: 'Branch', active: true },
    { code: '0001415017', company_name: 'Cargo Solutions', email: 'cargosolutions@gmail.com', company_address: 'Jr. Amazonas 321', company_type: 'Master', active: true },
    { code: '0001415018', company_name: 'Quick Transport', email: 'qtransport@gmail.com', company_address: 'Av. Universitaria 654', company_type: 'Branch', active: false },
    { code: '0001415019', company_name: 'Andes Courier', email: 'andescourier@gmail.com', company_address: 'Calle Las Flores 987', company_type: 'Master', active: true },
    { code: '0001415020', company_name: 'Pacific Freight', email: 'pfreight@gmail.com', company_address: 'Av. Grau 456', company_type: 'Branch', active: true },
    { code: '0001415021', company_name: 'Urban Express', email: 'urbanexpress@gmail.com', company_address: 'Jr. Puno 123', company_type: 'Master', active: false },
    { code: '0001415022', company_name: 'Skyline Logistics', email: 'skyline@gmail.com', company_address: 'Av. Benavides 789', company_type: 'Branch', active: true },
    { code: '0001415023', company_name: 'Prime Cargo', email: 'primecargo@gmail.com', company_address: 'Calle San Martin 321', company_type: 'Master', active: true },
    { code: '0001415024', company_name: 'Eagle Shipping', email: 'eagleshipping@gmail.com', company_address: 'Av. Angamos 654', company_type: 'Branch', active: false },
    { code: '0001415025', company_name: 'Ocean Freight', email: 'oceanfreight@gmail.com', company_address: 'Jr. Cusco 987', company_type: 'Master', active: true },
    { code: '0001415026', company_name: 'Rapid Logistics', email: 'rapidlogistics@gmail.com', company_address: 'Av. Salaverry 456', company_type: 'Branch', active: true },
    { code: '0001415027', company_name: 'Global Express', email: 'globalexpress@gmail.com', company_address: 'Calle Lima 123', company_type: 'Master', active: false },
    { code: '0001415028', company_name: 'Speedy Delivery', email: 'speedydelivery@gmail.com', company_address: 'Av. Brasil 789', company_type: 'Branch', active: true },
    { code: '0001415029', company_name: 'Andean Cargo', email: 'andeancargo@gmail.com', company_address: 'Jr. Arequipa 321', company_type: 'Master', active: true },
    { code: '0001415030', company_name: 'Metro Logistics', email: 'metrologistics@gmail.com', company_address: 'Av. La Paz 654', company_type: 'Branch', active: false },
    { code: '0001415031', company_name: 'Titan Freight', email: 'titanfreight@gmail.com', company_address: 'Calle Amazonas 987', company_type: 'Master', active: true },
    { code: '0001415032', company_name: 'Elite Courier', email: 'elitecourier@gmail.com', company_address: 'Av. Javier Prado 456', company_type: 'Branch', active: true },
    { code: '0001415033', company_name: 'Summit Shipping', email: 'summitshipping@gmail.com', company_address: 'Jr. Los Andes 123', company_type: 'Master', active: false },
    { code: '0001415034', company_name: 'Pioneer Logistics', email: 'pioneerlogistics@gmail.com', company_address: 'Av. Grau 789', company_type: 'Branch', active: true },
    { code: '0001415035', company_name: 'NextDay Delivery', email: 'nextday@gmail.com', company_address: 'Calle San Juan 321', company_type: 'Master', active: true },
    { code: '0001415036', company_name: 'Atlas Freight', email: 'atlasfreight@gmail.com', company_address: 'Av. Angamos 654', company_type: 'Branch', active: false },
    { code: '0001415037', company_name: 'Horizon Cargo', email: 'horizoncargo@gmail.com', company_address: 'Jr. Cusco 987', company_type: 'Master', active: true },
    { code: '0001415038', company_name: 'Velocity Express', email: 'velocityexpress@gmail.com', company_address: 'Av. Salaverry 456', company_type: 'Branch', active: true },
    { code: '0001415039', company_name: 'Infinity Logistics', email: 'infinitylogistics@gmail.com', company_address: 'Calle Lima 123', company_type: 'Master', active: false },
    { code: '0001415040', company_name: 'Arrow Freight', email: 'arrowfreight@gmail.com', company_address: 'Av. Brasil 789', company_type: 'Branch', active: true },
    { code: '0001415041', company_name: 'Summit Cargo', email: 'summitcargo@gmail.com', company_address: 'Jr. Arequipa 321', company_type: 'Master', active: true },
    { code: '0001415042', company_name: 'Peak Logistics', email: 'peaklogistics@gmail.com', company_address: 'Av. La Paz 654', company_type: 'Branch', active: false },
  ];

  selectedCompanies: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  editCompany(item: any) {
    this.router.navigate(['dashboard/settings/companies/edit/2']);
  }

  clear(table: Table) {
    table.clear();
  }

  deleteCompany(item: any) {
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

  createCompany(){
    this.router.navigate(['dashboard/settings/companies/create'])
  }
}

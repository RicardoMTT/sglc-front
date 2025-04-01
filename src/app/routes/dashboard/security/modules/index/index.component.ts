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


  modules = [
  { code: '00001', module_name: 'CLIENTES', main_module: true, father_module: 'OPERACIONES', create_date: '22/05/2025', active: true },
  { code: '00002', module_name: 'VENTAS', main_module: true, father_module: 'OPERACIONES', create_date: '23/05/2025', active: true },
  { code: '00003', module_name: 'COMPRAS', main_module: true, father_module: 'OPERACIONES', create_date: '24/05/2025', active: false },
  { code: '00004', module_name: 'INVENTARIO', main_module: true, father_module: 'LOGÍSTICA', create_date: '25/05/2025', active: true },
  { code: '00005', module_name: 'FACTURACIÓN', main_module: true, father_module: 'FINANZAS', create_date: '26/05/2025', active: true },
  { code: '00006', module_name: 'RECURSOS HUMANOS', main_module: true, father_module: 'ADMINISTRACIÓN', create_date: '27/05/2025', active: false },
  { code: '00007', module_name: 'PRODUCCIÓN', main_module: true, father_module: 'OPERACIONES', create_date: '28/05/2025', active: true },
  { code: '00008', module_name: 'MARKETING', main_module: true, father_module: 'COMUNICACIONES', create_date: '29/05/2025', active: true },
  { code: '00009', module_name: 'SOPORTE', main_module: true, father_module: 'ATENCIÓN AL CLIENTE', create_date: '30/05/2025', active: false },
  { code: '00010', module_name: 'PROYECTOS', main_module: true, father_module: 'PLANIFICACIÓN', create_date: '31/05/2025', active: true },
  { code: '00011', module_name: 'CALIDAD', main_module: true, father_module: 'CONTROL', create_date: '01/06/2025', active: true },
  { code: '00012', module_name: 'AUDITORÍA', main_module: true, father_module: 'FINANZAS', create_date: '02/06/2025', active: false },
  { code: '00013', module_name: 'LOGÍSTICA', main_module: true, father_module: 'OPERACIONES', create_date: '03/06/2025', active: true },
  { code: '00014', module_name: 'ALMACÉN', main_module: true, father_module: 'LOGÍSTICA', create_date: '04/06/2025', active: true },
  { code: '00015', module_name: 'TRANSPORTE', main_module: true, father_module: 'LOGÍSTICA', create_date: '05/06/2025', active: false },
  { code: '00016', module_name: 'SEGURIDAD', main_module: true, father_module: 'ADMINISTRACIÓN', create_date: '06/06/2025', active: true },
  { code: '00017', module_name: 'INFRAESTRUCTURA', main_module: true, father_module: 'TECNOLOGÍA', create_date: '07/06/2025', active: true },
  { code: '00018', module_name: 'DESARROLLO', main_module: true, father_module: 'TECNOLOGÍA', create_date: '08/06/2025', active: false },
  { code: '00019', module_name: 'INVESTIGACIÓN', main_module: true, father_module: 'INNOVACIÓN', create_date: '09/06/2025', active: true },
  { code: '00020', module_name: 'LEGAL', main_module: true, father_module: 'ADMINISTRACIÓN', create_date: '10/06/2025', active: true },
  { code: '00021', module_name: 'RELACIONES PÚBLICAS', main_module: true, father_module: 'COMUNICACIONES', create_date: '11/06/2025', active: false },
  { code: '00022', module_name: 'CAPACITACIÓN', main_module: true, father_module: 'RECURSOS HUMANOS', create_date: '12/06/2025', active: true },
  { code: '00023', module_name: 'MANTENIMIENTO', main_module: true, father_module: 'INFRAESTRUCTURA', create_date: '13/06/2025', active: true },
  { code: '00024', module_name: 'DISTRIBUCIÓN', main_module: true, father_module: 'LOGÍSTICA', create_date: '14/06/2025', active: false },
  { code: '00025', module_name: 'ESTRATEGIA', main_module: true, father_module: 'PLANIFICACIÓN', create_date: '15/06/2025', active: true },
  { code: '00026', module_name: 'ANÁLISIS', main_module: true, father_module: 'CONTROL', create_date: '16/06/2025', active: true },
  { code: '00027', module_name: 'CONSULTORÍA', main_module: true, father_module: 'ADMINISTRACIÓN', create_date: '17/06/2025', active: false },
  { code: '00028', module_name: 'RIESGOS', main_module: true, father_module: 'SEGURIDAD', create_date: '18/06/2025', active: true },
  { code: '00029', module_name: 'INNOVACIÓN', main_module: true, father_module: 'PLANIFICACIÓN', create_date: '19/06/2025', active: true },
  { code: '00030', module_name: 'FINANZAS', main_module: true, father_module: 'ADMINISTRACIÓN', create_date: '20/06/2025', active: true },
];
  selectedModules: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.index();
  }


  index(){
    this.apiService.getModules().subscribe({
      next: ((data:any) => {
        console.log('data',data.data);
        this.modules = data.data

      })
    })
  }
  editModule(item: any) {
    this.router.navigate(['dashboard/security/modules/edit/2']);
  }

  clear(table: Table) {
    table.clear();
  }

  deleteModule(item: any) {
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
    this.router.navigate(['dashboard/security/modules/create'])
  }
}

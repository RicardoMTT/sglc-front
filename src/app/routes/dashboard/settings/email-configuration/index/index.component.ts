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


  emailsConfiguration = [
    { id: 'CC000001', name: 'Paquetes', emailName: 'Notificacion 1', emailSubject: 'Recepcion registro paquete', emailSigner: 'Juan Perez', active: true },
    { id: 'CL000321', name: 'Rojas Rivera Pedro martin', emailName: 'Vendedor', emailSubject: 'Recepcion paquete', emailSigner: 'Ricardo Torres', active: true },
    { id: 'CC000002', name: 'Envios', emailName: 'Notificacion 2', emailSubject: 'Envio confirmado', emailSigner: 'Maria Lopez', active: true },
    { id: 'CL000322', name: 'Gomez Fernandez Ana', emailName: 'Cliente', emailSubject: 'Envio recibido', emailSigner: 'Carlos Garcia', active: false },
    { id: 'CC000003', name: 'Devoluciones', emailName: 'Notificacion 3', emailSubject: 'Devolucion procesada', emailSigner: 'Luis Fernandez', active: true },
    { id: 'CL000323', name: 'Torres Ramirez Pedro', emailName: 'Proveedor', emailSubject: 'Devolucion aceptada', emailSigner: 'Ana Torres', active: true },
    { id: 'CC000004', name: 'Facturas', emailName: 'Notificacion 4', emailSubject: 'Factura generada', emailSigner: 'Sofia Martinez', active: false },
    { id: 'CL000324', name: 'Martinez Cruz Lucia', emailName: 'Comprador', emailSubject: 'Factura enviada', emailSigner: 'Pedro Castillo', active: true },
    { id: 'CC000005', name: 'Pagos', emailName: 'Notificacion 5', emailSubject: 'Pago recibido', emailSigner: 'Jorge Ramirez', active: true },
    { id: 'CL000325', name: 'Vargas Gomez Elena', emailName: 'Cliente', emailSubject: 'Pago confirmado', emailSigner: 'Miguel Rojas', active: false },
    { id: 'CC000006', name: 'Pedidos', emailName: 'Notificacion 6', emailSubject: 'Pedido procesado', emailSigner: 'Carmen Diaz', active: true },
    { id: 'CL000326', name: 'Sanchez Vega Ricardo', emailName: 'Proveedor', emailSubject: 'Pedido enviado', emailSigner: 'Valeria Morales', active: true },
    { id: 'CC000007', name: 'Reclamos', emailName: 'Notificacion 7', emailSubject: 'Reclamo recibido', emailSigner: 'Andres Herrera', active: false },
    { id: 'CL000327', name: 'Cruz Navarro Paula', emailName: 'Cliente', emailSubject: 'Reclamo en proceso', emailSigner: 'Diego Navarro', active: true },
    { id: 'CC000008', name: 'Soporte', emailName: 'Notificacion 8', emailSubject: 'Soporte asignado', emailSigner: 'Gabriela Paredes', active: true },
    { id: 'CL000328', name: 'Vega Flores Hector', emailName: 'Usuario', emailSubject: 'Soporte resuelto', emailSigner: 'Isabel Flores', active: true },
    { id: 'CC000009', name: 'Actualizaciones', emailName: 'Notificacion 9', emailSubject: 'Actualizacion disponible', emailSigner: 'Juan Guerra', active: false },
    { id: 'CL000329', name: 'Lopez Sanchez Maria', emailName: 'Cliente', emailSubject: 'Actualizacion aplicada', emailSigner: 'Carlos Torres', active: true },
    { id: 'CC000010', name: 'Alertas', emailName: 'Notificacion 10', emailSubject: 'Alerta de seguridad', emailSigner: 'Ana Lopez', active: true },
    { id: 'CL000330', name: 'Ramirez Herrera Luis', emailName: 'Usuario', emailSubject: 'Alerta resuelta', emailSigner: 'Sofia Vargas', active: false },
    { id: 'CC000011', name: 'Promociones', emailName: 'Notificacion 11', emailSubject: 'Nueva promocion', emailSigner: 'Pedro Gomez', active: true },
    { id: 'CL000331', name: 'Cruz Diaz Lucia', emailName: 'Cliente', emailSubject: 'Promocion aplicada', emailSigner: 'Jorge Diaz', active: true },
    { id: 'CC000012', name: 'Encuestas', emailName: 'Notificacion 12', emailSubject: 'Encuesta disponible', emailSigner: 'Elena Morales', active: false },
    { id: 'CL000332', name: 'Martinez Vega Ricardo', emailName: 'Usuario', emailSubject: 'Encuesta completada', emailSigner: 'Carmen Guerra', active: true },
    { id: 'CC000013', name: 'Eventos', emailName: 'Notificacion 13', emailSubject: 'Evento programado', emailSigner: 'Luis Torres', active: true },
    { id: 'CL000333', name: 'Navarro Sanchez Paula', emailName: 'Cliente', emailSubject: 'Evento confirmado', emailSigner: 'Gabriela Vega', active: true },
    { id: 'CC000014', name: 'Noticias', emailName: 'Notificacion 14', emailSubject: 'Nueva noticia', emailSigner: 'Hector Perez', active: false },
    { id: 'CL000334', name: 'Sanchez Guerra Diego', emailName: 'Usuario', emailSubject: 'Noticia leida', emailSigner: 'Isabel Torres', active: true },
    { id: 'CC000015', name: 'Recordatorios', emailName: 'Notificacion 15', emailSubject: 'Recordatorio programado', emailSigner: 'Juan Perez', active: true },
    { id: 'CL000335', name: 'Lopez Gomez Maria', emailName: 'Cliente', emailSubject: 'Recordatorio enviado', emailSigner: 'Carlos Garcia', active: true },
  ];

  selectedEmailConfiguration: any = [];

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  editEmail(item: any) {
    this.router.navigate(['dashboard/settings/email-configuration/edit/2']);
  }

  clear(table: Table) {
    table.clear();
  }

  deleteEmail(item: any) {
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

  createEmail(){
    this.router.navigate(['dashboard/settings/email-configuration/create'])
  }
}

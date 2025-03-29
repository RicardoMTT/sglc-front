import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { GENERAL_PARAMETERS_ROUTES } from './general-parameters/general-parameters.routes';
import { DOCUMENT_NUMERATOR_ROUTES } from './document-numerator/document-numerator.routes';
import { EMAIL_CONFIGURATION_ROUTES } from './email-configuration/email-configuration.routes';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    component: SettingsComponent, // ✅ Sera el contenedor principal
    children:[
      {
        path: 'general-parameters', children: GENERAL_PARAMETERS_ROUTES
      },
      {
        path: 'documents-generator', children: DOCUMENT_NUMERATOR_ROUTES
      },
      {
        path: 'email-configuration', children: EMAIL_CONFIGURATION_ROUTES
      }
    ]
   },
];

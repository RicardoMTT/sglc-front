import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { GENERAL_PARAMETERS_ROUTES } from './general-parameters/general-parameters.routes';
import { DOCUMENT_NUMERATOR_ROUTES } from './document-numerator/document-numerator.routes';
import { EMAIL_CONFIGURATION_ROUTES } from './email-configuration/email-configuration.routes';
import { GEOGRAPHIC_LOCATION_ROUTES } from './geographic-location/geographic-location.route';
import { COMPANIES_ROUTES } from './companies/companies.routes';
import { COUNTRIES_ROUTES } from './countries/countries.routes';
import { ACTIVITIES_ROUTES } from './activities-calendar/activities-calendar.routes';
import { AUDITS_ROUTES } from './audit/audit.routes';
import { SMTP_SERVER_ROUTES } from './smtp-server/smtp-server.routes';
import { NOTIFICATIONS_ROUTES } from './notifications/notifications.routes';

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
      },
      {
        path: 'geographic-location', children: GEOGRAPHIC_LOCATION_ROUTES
      },
      {
        path: 'companies', children: COMPANIES_ROUTES
      },
      {
        path: 'countries', children: COUNTRIES_ROUTES
      },
      {
        path: 'activities-calendar', children: ACTIVITIES_ROUTES
      },
      {
        path: 'audits', children: AUDITS_ROUTES
      },
      {
        path: 'smtp-server', children: SMTP_SERVER_ROUTES
      },
      {
        path: 'notifications', children: NOTIFICATIONS_ROUTES
      }
    ]
   },
];

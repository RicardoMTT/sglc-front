import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notifications',
  standalone: true,
  templateUrl: './notifications.component.html',
  imports: [CommonModule,RouterModule]
})
export class NotificationsComponent {

}

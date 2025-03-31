import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-companies',
  standalone: true,
  templateUrl: './companies.component.html',
  imports: [CommonModule,RouterModule]
})
export class CompaniesComponent {

}

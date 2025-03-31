import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-countries',
  standalone: true,
  templateUrl: './countries.component.html',
  imports: [CommonModule,RouterModule]
})
export class CountriesComponent {

}

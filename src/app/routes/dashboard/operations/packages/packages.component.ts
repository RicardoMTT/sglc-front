import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-packages',
  standalone: true,
  templateUrl: './packages.component.html',
  imports: [CommonModule, RouterModule]
})
export class PackagesComponent {

}

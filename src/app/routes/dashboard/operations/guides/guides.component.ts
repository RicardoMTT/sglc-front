import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-guides',
  standalone: true,
  templateUrl: './guides.component.html',
  imports: [CommonModule, RouterModule]
})
export class GuidesComponent {

}

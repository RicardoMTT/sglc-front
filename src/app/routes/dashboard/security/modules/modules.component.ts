import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modules',
  standalone: true,
  templateUrl: './modules.component.html',
  imports: [CommonModule, RouterModule]
})
export class ModulesComponent {

}

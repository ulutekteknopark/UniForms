import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UfIntroCardComponent,
  UfButtonComponent,
} from '@uniforms/uf-web-components'

@Component({
  selector: 'uf-main-page',
  standalone: true,
  imports: [CommonModule, UfIntroCardComponent, UfButtonComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}

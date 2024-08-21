import { Component, Input, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'uf-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './uf-button.component.html',
  styleUrl: './uf-button.component.scss',
})
export class UfButtonComponent {
  @Input() title : string = "Default";
  @Input() disabled: boolean = false;
  @Input({
    transform: booleanAttribute,
  }) wfull : boolean = false;
}

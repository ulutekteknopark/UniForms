import { Component, ChangeDetectionStrategy, model, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'uf-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './uf-checkbox.component.html',
  styleUrl: './uf-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UfCheckboxComponent {
  @Input() title: string = "Default";
  checked = model(false);
}


import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatError } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';

// export interface FormCheckInputArgs {
//   strings: string[],
// }

@Component({
  selector: 'uf-form-check-input',
  standalone: true,
  imports: [MatIcon, MatError, NgIf, NgFor, MatCheckbox],
  templateUrl: './uf-form-check-input.component.html',
  styleUrls: ['./uf-form-check-input.component.scss'],
})

export class UfFormCheckInputComponent {
  @Input() choices?: { [key: string]: any };

  get strings(): string[]{
    return (this.choices?.['strings'] as string[]).filter(str => str.length > 0)
  }
}

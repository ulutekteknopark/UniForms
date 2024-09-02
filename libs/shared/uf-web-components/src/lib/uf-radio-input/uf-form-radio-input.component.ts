import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatError } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatOptgroup } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

// export interface FormRadioInputArgs {
//   strings: string[],
// }

@Component({
  selector: 'uf-form-radio-input',
  standalone: true,
  imports: [MatIcon, MatError, NgIf, NgFor, MatCheckbox, MatRadioModule, ],
  templateUrl: './uf-form-radio-input.component.html',
  styleUrls: ['./uf-form-radio-input.component.scss'],
})

export class UfFormRadioInputComponent {
  @Input() choices?: { [key: string]: any };

  get strings(): string[]{
    return (this.choices?.['strings'] as string[]).filter(str => str.length > 0)
  }
}

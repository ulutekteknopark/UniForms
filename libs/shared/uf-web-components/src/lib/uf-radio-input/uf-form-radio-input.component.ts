import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatError } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'uf-form-radio-input',
  standalone: true,
  imports: [MatIcon, MatError, NgIf, NgFor, MatCheckbox, MatRadioModule, ReactiveFormsModule],
  templateUrl: './uf-form-radio-input.component.html',
  styleUrls: ['./uf-form-radio-input.component.scss'],
})

export class UfFormRadioInputComponent {
  @Input() choices?: { [key: string]: any };

  @Input() radioFormControl = new FormControl('');

  get options(): string[]{
    return (this.choices?.['options'] as string[]).filter(str => str.length > 0)
  }
}

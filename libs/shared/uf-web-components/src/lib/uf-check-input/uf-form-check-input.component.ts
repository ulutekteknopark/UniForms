import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatError } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'uf-form-check-input',
  standalone: true,
  imports: [MatIcon, MatError, NgIf, NgFor, MatCheckbox, ReactiveFormsModule],
  templateUrl: './uf-form-check-input.component.html',
  styleUrls: ['./uf-form-check-input.component.scss'],
})

export class UfFormCheckInputComponent {
  @Input() choices?: { [key: string]: any };

  get options(): string[]{
    return (this.choices?.['options'] as string[]).filter(str => str.length > 0)
  }
}

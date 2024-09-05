import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'uf-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './uf-dropdown.component.html',
  styleUrl: './uf-dropdown.component.scss',
})
export class UfDropdownComponent {
  @Input() choices!: {[key: string]: any};
  @Input() dropdownFormControl = new FormControl('', [Validators.required]);

  get dropdown_title(): string{
    return this.choices?.['dropdown_title'] ?? 'Seçiniz...';
  }

  get options(): string[]{
    return (this.choices?.['options'] as string[]).filter(str => str.length > 0)
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'uf-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './uf-dropdown.component.html',
  styleUrl: './uf-dropdown.component.scss',
})
export class UfDropdownComponent {
  @Input() title!: string;
  @Input() choices!: {[key: string]: any};
  @Input() dropdownFormControl = new FormControl('', [Validators.required]);

  get strings(): string[]{
    return (this.choices?.['strings'] as string[]).filter(str => str.length > 0)
  }

}
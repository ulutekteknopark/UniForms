import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'uf-email-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './uf-email-input.component.html',
  styleUrl: './uf-email-input.component.scss',
})
export class UfEmailInputComponent {
  @Input() emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}

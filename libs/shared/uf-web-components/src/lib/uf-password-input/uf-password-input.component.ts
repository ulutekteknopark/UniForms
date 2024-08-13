import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'uf-password-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './uf-password-input.component.html',
  styleUrl: './uf-password-input.component.scss',
})
export class UfPasswordInputComponent {
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
}

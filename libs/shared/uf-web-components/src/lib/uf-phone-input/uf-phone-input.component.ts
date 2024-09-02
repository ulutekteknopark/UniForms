import { Component, Input } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'uf-phone-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIcon],
  templateUrl: './uf-phone-input.component.html',
  styleUrl: './uf-phone-input.component.scss',
})
export class UfPhoneInputComponent {
  @Input() phoneFormControl = new FormControl('', [Validators.required]);
}

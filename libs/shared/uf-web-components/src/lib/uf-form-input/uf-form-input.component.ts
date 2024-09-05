import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'uf-form-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './uf-form-input.component.html',
  styleUrl: './uf-form-input.component.scss',
})

export class UfFormInputComponent {
  @Input() title: string = "Default";
  @Input() placeholder: string = "";
  @Input() error: string = "Lütfen geçerli bir değer girin!";
  @Input() required: boolean = false;
  @Input() icon: string | undefined = '';
  @Input() type: string = 'text';
  @Input() appearance: MatFormFieldAppearance = 'outline'; // fill

  @Input() inputFormControl: FormControl = new FormControl('', [Validators.required]);
}

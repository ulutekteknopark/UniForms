import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'uf-form-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './uf-form-input.component.html',
  styleUrl: './uf-form-input.component.scss',
})

export class UfFormInputComponent implements OnInit {
  @Input() title: string = "Default";
  @Input() placeholder: string = "";
  @Input() error: string = "Lütfen geçerli bir değer girin!";
  @Input() required: boolean = false;

  private _inputFormControl!: FormControl;
  value = '';

  ngOnInit() {
    const validators = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    this._inputFormControl = new FormControl('', validators);
  }

  get inputFormControl(): FormControl {
    return this._inputFormControl;
  }
}

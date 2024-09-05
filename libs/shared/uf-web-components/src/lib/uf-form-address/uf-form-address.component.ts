import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';

import { UfFormInputComponent } from '../uf-form-input/uf-form-input.component';

@Component({
  selector: 'uf-form-address',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatHint, MatLabel, UfFormInputComponent, MatFormField, MatInput, ReactiveFormsModule],
  templateUrl: './uf-form-address.component.html',
  styleUrl: './uf-form-address.component.scss',
})
export class UfFormAddressComponent implements OnInit, OnChanges {
  @Input() choices?: { [key: string]: any };
  @Input() required: boolean = true;

  addressFormControls: FormControl[] = [
    new FormControl(''),
    new FormControl(''),
    new FormControl(''),
    new FormControl(''),
    new FormControl(''),
  ];

  ngOnInit(): void {
    this.updateValidators();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['required']) {
      this.updateValidators();
    }
  }

  private updateValidators(): void {
    this.addressFormControls.forEach( fc => fc.clearValidators );

    // postal code
    this.addressFormControls[2].addValidators(Validators.pattern('^[0-9]+$'))

    if (this.required)
      this.addressFormControls.forEach(formControl => {
        formControl.addValidators([Validators.required]);
      });

    this.addressFormControls.forEach( FormControl => FormControl.updateValueAndValidity());
  }

  get city(): boolean {
    return this.choices?.['city'];
  }
  get district(): boolean {
    return this.choices?.['district'];
  }
  get postal_code(): boolean {
    return this.choices?.['postal_code'];
  }
  get address(): boolean {
    return this.choices?.['address'];
  }
  get address2(): boolean {
    return this.choices?.['address2'];
  }
}

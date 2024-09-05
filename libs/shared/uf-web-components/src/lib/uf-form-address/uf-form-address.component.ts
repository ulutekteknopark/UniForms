import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'uf-form-address',
  standalone: true,
  imports: [CommonModule, MatHint, MatLabel, MatFormField, MatInput, ReactiveFormsModule],
  templateUrl: './uf-form-address.component.html',
  styleUrl: './uf-form-address.component.scss',
})
export class UfFormAddressComponent {
  @Input() choices?: { [key: string]: any };
  @Input() required: boolean = true;

  addressFormControls: FormControl[] = [
    new FormControl(''),
    new FormControl(''),
    new FormControl(''),
    new FormControl(''),
    new FormControl(''),
  ];

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

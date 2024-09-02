import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'uf-form-address',
  standalone: true,
  imports: [CommonModule, MatHint, MatLabel, MatFormField, MatInput],
  templateUrl: './uf-form-address.component.html',
  styleUrl: './uf-form-address.component.scss',
})
export class UfFormAddressComponent {
  @Input() choices?: { [key: string]: any };
  @Input() required: boolean = true;

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

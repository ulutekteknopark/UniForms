import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'uf-form-element-select-button',
  standalone: true,
  imports: [CommonModule, MatIcon, MatRipple],
  templateUrl: './uf-form-element-select-button.component.html',
  styleUrl: './uf-form-element-select-button.component.scss',
})
export class UfFormElementSelectButtonComponent {
  @Input() title: string = "Title";
  @Input() icon : string = "";
  @Input() icon2: string = "";
}

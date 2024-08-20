import { Component, ChangeDetectionStrategy, model, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'uf-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './uf-checkbox.component.html',
  styleUrl: './uf-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UfCheckboxComponent {
  @Input() title: string = "Default";
  isChecked = false
  @Output() onCheckedChange = new EventEmitter<boolean>();

  onChange(){
    this.isChecked = !this.isChecked;
    this.onCheckedChange.emit(this.isChecked);
  }
}


import { Component, ChangeDetectionStrategy, model, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'uf-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, FormsModule],
  templateUrl: './uf-checkbox.component.html',
  styleUrl: './uf-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UfCheckboxComponent {
  @Input() title: string = "Default";
  @Input() isChecked = false
  @Output() onCheckedChange = new EventEmitter<boolean>();

  onChange(){
    // this.isChecked = !this.isChecked;
    this.onCheckedChange.emit(this.isChecked);
  }
}


import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UfButtonComponent } from '../uf-button/uf-button.component';

@Component({
  selector: 'uf-form-preview',
  standalone: true,
  imports: [CommonModule, UfButtonComponent],
  templateUrl: './uf-form-preview.component.html',
  styleUrl: './uf-form-preview.component.scss',
})
export class UfFormPreviewComponent {
  @Input() id!: number;
  @Input() formTitle!: string;
  @Input() responseCount!: number
  
  @Output() gotoFormEvent = new EventEmitter<number>();

  gotoForm() {
    this.gotoFormEvent.emit(this.id);
  }
}


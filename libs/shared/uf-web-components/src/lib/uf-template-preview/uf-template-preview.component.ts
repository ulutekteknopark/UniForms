import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UfButtonComponent } from '../uf-button/uf-button.component';

@Component({
  selector: 'uf-template-preview',
  standalone: true,
  imports: [CommonModule, UfButtonComponent],
  templateUrl: './uf-template-preview.component.html',
  styleUrl: './uf-template-preview.component.scss',
})
export class UfTemplatePreviewComponent {
  @Input() id!: number;
  @Input() previewImage!:string;
  @Input() templateName!: string;
  
  @Output() useTemplateEvent = new EventEmitter<Number>();

  useTemplate() {
    this.useTemplateEvent.emit(this.id);
  }
}

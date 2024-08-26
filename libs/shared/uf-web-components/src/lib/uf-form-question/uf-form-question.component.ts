import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { UfFormRateInputComponent } from '../uf-rate-input/uf-form-rate-input.component';
import { UfFormInputComponent } from '../uf-form-input/uf-form-input.component';
import { UfTextareaComponent } from '../uf-textarea/uf-textarea.component';
import { UfEmailInputComponent } from '../uf-email-input/uf-email-input.component';

interface FormQuestion {
  id: number;
  text: string
  position: number;
  type: string;
  editable: boolean;
}

@Component({
  selector: 'uf-form-question',
  templateUrl: './uf-form-question.component.html',
  standalone: true,
  imports: [CommonModule, MatFabButton, MatIconButton, MatIcon, UfFormRateInputComponent,
     UfFormInputComponent, UfTextareaComponent, UfEmailInputComponent],
  styleUrls: ['./uf-form-question.component.scss'],
})
export class UfFormQuestionComponent {
  @Input() question!: FormQuestion;

  @Output() edit = new EventEmitter<void>();
  @Output() changePosition = new EventEmitter<number>();
  @Output() delete = new EventEmitter<void>();

  onEdit() {
    this.edit.emit();
  }

  onMoveUp() {
    this.changePosition.emit(-1);
  }

  onMoveDown() {
    this.changePosition.emit(1);
  }

  onDelete() {
    this.delete.emit();
  }
}

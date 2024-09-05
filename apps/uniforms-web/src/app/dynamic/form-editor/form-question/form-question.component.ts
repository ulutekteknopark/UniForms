import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { FormQuestion } from '../form-editor.component';
import { UfFormChoicesComponent } from '../form-choices/form-choices.component';

@Component({
  selector: 'uf-question',
  standalone: true,
  imports: [
    CommonModule,
    UfFormChoicesComponent,
    MatFabButton,
    MatIconButton,
    MatIcon,
  ],
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.scss'],
})
export class UfFormQuestionComponent {
  @Input() question!: FormQuestion;
  @Input() isInEditor: boolean = false;

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

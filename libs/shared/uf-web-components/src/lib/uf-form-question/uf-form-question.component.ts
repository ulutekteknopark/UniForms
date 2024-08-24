import { Component, Input, Output, output, OutputEmitterRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { UfFormInputComponent } from '../uf-form-input/uf-form-input.component';
import { UfTextareaComponent } from '../uf-textarea/uf-textarea.component';
import { UfFormRateInputComponent } from '../uf-rate-input/uf-form-rate-input.component';

@Component({
  selector: 'uf-form-question',
  standalone: true,
  imports: [CommonModule, MatFabButton, MatIconButton, MatIcon, UfFormRateInputComponent, UfFormInputComponent, UfTextareaComponent],
  templateUrl: './uf-form-question.component.html',
  styleUrl: './uf-form-question.component.scss',
})
export class UfFormQuestionComponent {
  @Input() editable: boolean = false;

  @Input() id: number = -1;
  @Input() position: number = -1;
  @Input() image: string = "";
  @Input() question: string = "";
  @Input() type: string = "name";
  @Input() required: boolean = false;

  @Output() direction: number = 0;

  deleteEvent: OutputEmitterRef<void> = output();
  editEvent: OutputEmitterRef<void> = output();
  changePositionEvent: OutputEmitterRef<number> = output();

  changePosition(direction: number){
    this.changePositionEvent.emit(direction);
  }

  edit(){
    this.editEvent.emit();
  }

  delete(){
    this.deleteEvent.emit();
  }
}

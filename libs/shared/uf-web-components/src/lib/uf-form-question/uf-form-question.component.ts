import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { UfFormInputComponent } from '../uf-form-input/uf-form-input.component';
import { UfTextareaComponent } from '../uf-textarea/uf-textarea.component';
import { UfFormRateInputComponent } from '../uf-rate-input/uf-form-rate-input.component';

@Component({
  selector: 'uf-form-question',
  standalone: true,
  imports: [CommonModule, MatFabButton, MatIcon, UfFormRateInputComponent, UfFormInputComponent, UfTextareaComponent],
  templateUrl: './uf-form-question.component.html',
  styleUrl: './uf-form-question.component.scss',
})
export class UfFormQuestionComponent {
  @Input() editable: boolean = false;

  @Input() image: string = "";
  @Input() question: string = "";
  @Input() type: string = "name";
  @Input() required: boolean = false;

  edit(){
    alert("edit question");
  }

  delete(){
    alert("delete question");
  }
}

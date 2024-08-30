import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormControl, Validators } from '@angular/forms';

import { UfFormRateInputComponent } from '../uf-rate-input/uf-form-rate-input.component';
import { UfFormInputComponent } from '../uf-form-input/uf-form-input.component';
import { UfTextareaComponent } from '../uf-textarea/uf-textarea.component';
import { UfEmailInputComponent } from '../uf-email-input/uf-email-input.component';
import { UfDateInputComponent } from '../uf-date-input/uf-date-input.component';
import { UfFormAddressComponent } from '../uf-form-address/uf-form-address.component';
import { UfFormCheckInputComponent } from '../uf-check-input/uf-form-check-input.component';

export interface FormQuestion {
  id: number;
  type: string;
  required: boolean;
  position: number; // sorunun anketteki sırası
  editable: boolean; // soru düzenlenebilir mi ? sadece editörde true olmalı

  text: string; // soru
  choices: object; // soru şıkları
  answers?: object;// kullanıcının verdiği cevaplar
}

@Component({
  selector: 'uf-form-question',
  templateUrl: './uf-form-question.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatFabButton,
    MatIconButton,
    MatIcon,
    UfFormRateInputComponent,
    UfFormInputComponent,
    UfTextareaComponent,
    UfEmailInputComponent,
    UfDateInputComponent,
    UfFormCheckInputComponent,
    UfFormAddressComponent,
  ],
  styleUrls: ['./uf-form-question.component.scss'],
})
export class UfFormQuestionComponent implements OnInit, OnChanges {
  @Input() question!: FormQuestion;
  @Input() required: boolean = false;

  @Output() edit = new EventEmitter<void>();
  @Output() changePosition = new EventEmitter<number>();
  @Output() delete = new EventEmitter<void>();

  formControl = new FormControl('');

  ngOnInit(): void {
    this.updateValidators();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['required']) {
      this.updateValidators();
    }
  }

  private updateValidators(): void {
    if (this.question.required) {
      this.formControl.addValidators([Validators.required]);
    } else {
      this.formControl.clearValidators();
    }

    if(this.question.type == 'email'){
      this.formControl.addValidators([Validators.email]);
    }
    this.formControl.updateValueAndValidity();
  }

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

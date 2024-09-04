import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormControl, Validators } from '@angular/forms';

import { FormQuestion } from '../form-editor.component';
import { UfDateInputComponent, UfDropdownComponent, UfEmailInputComponent, UfFormAddressComponent, UfFormInputComponent, UfFormRadioInputComponent, UfFormRateInputComponent, UfTextareaComponent } from '@uniforms/uf-web-components';
import { UfFormCheckInputComponent } from 'libs/shared/uf-web-components/src/lib/uf-check-input/uf-form-check-input.component';

@Component({
  selector: 'uf-choices',
  standalone: true,
  imports: [
    CommonModule,
    MatFabButton,
    MatIconButton,
    MatIcon,
    NgFor,
    UfFormInputComponent,
    UfEmailInputComponent,
    UfFormAddressComponent,
    UfDateInputComponent,
    UfTextareaComponent,
    UfFormRadioInputComponent,
    UfFormCheckInputComponent,
    UfFormRateInputComponent,
    UfDropdownComponent,
  ],
  templateUrl: './form-choices.component.html',
  styleUrls: ['./form-choices.component.scss'],
})
export class UfFormChoicesComponent implements OnInit, OnChanges {
  @Input() question!: FormQuestion;

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
}

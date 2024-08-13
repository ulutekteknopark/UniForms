import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UfFormInputComponent } from '../uf-form-input/uf-form-input.component';
import { UfPasswordInputComponent } from '../uf-password-input/uf-password-input.component';
import { UfEmailInputComponent } from '../uf-email-input/uf-email-input.component';
import { UfCheckboxComponent } from '../uf-checkbox/uf-checkbox.component';
import { UfButtonComponent } from '../uf-button/uf-button.component';

@Component({
  selector: 'uf-signup-form',
  standalone: true,
  imports: [CommonModule, UfButtonComponent, UfEmailInputComponent, UfCheckboxComponent, UfPasswordInputComponent, UfFormInputComponent],
  templateUrl: './uf-signup-form.component.html',
  styleUrl: './uf-signup-form.component.scss',
})
export class UfSignupFormComponent {}

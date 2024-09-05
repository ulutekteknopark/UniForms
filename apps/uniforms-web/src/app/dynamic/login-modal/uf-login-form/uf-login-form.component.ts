import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

import { UfSignupFormComponent } from '../uf-signup-form/uf-signup-form.component'
import {
  UfFormInputComponent,
  UfButtonComponent,
  UfCheckboxComponent,
  UfPasswordInputComponent,
  UfEmailInputComponent,
} from '@uniforms/uf-web-components';

@Component({
  selector: 'uf-login-form',
  standalone: true,
  imports: [MatIcon, CommonModule, MatDialogModule, UfButtonComponent, UfEmailInputComponent, UfCheckboxComponent, UfPasswordInputComponent, UfFormInputComponent],
  templateUrl: './uf-login-form.component.html',
  styleUrl: './uf-login-form.component.scss',
})
export class UfLoginFormComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(public dialog: MatDialog) { }

  openSignInModal(): void {
    this.dialog.open(UfSignupFormComponent, {
      maxWidth: '60vw',
      maxHeight: '75vh',

      panelClass: ['border-4', 'border-solid', 'border-gray-300', 'rounded-[30px]'],
    });
  }

  onSubmit() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      console.log("Submitting email: " + this.emailFormControl.value + ", password: " + this.passwordFormControl.value);
    }
  }
}

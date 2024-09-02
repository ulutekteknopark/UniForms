import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { UfSocialLoginFormComponent } from '../uf-social-login-form/uf-social-login-form.component';
import {
  UfFormInputComponent,
  UfButtonComponent,
  UfCheckboxComponent,
  UfPasswordInputComponent,
  UfEmailInputComponent,
} from '@uniforms/uf-web-components';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'uf-signup-form',
  standalone: true,
  imports: [CommonModule, UfButtonComponent, UfEmailInputComponent, UfCheckboxComponent, UfPasswordInputComponent, UfFormInputComponent, MatDialogModule],
  templateUrl: './uf-signup-form.component.html',
  styleUrl: './uf-signup-form.component.scss',
})
export class UfSignupFormComponent {

  nameFormControl = new FormControl('', [Validators.required]);
  surnameFormControl = new FormControl('', [Validators.required])
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  repeatpasswordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  isCheckboxChecked: boolean = false;

  buttonDisabled = false;

  private authService: AuthService = inject(AuthService);

  constructor(public dialog: MatDialog) { }

  onSubmit(): void {
    if(this.isValid()){
      console.log(`
        Submitting:
        name: ${this.nameFormControl.value},
        surname: ${this.surnameFormControl.value},
        email: ${this.emailFormControl.value},
        password: ${this.passwordFormControl.value},
        repeatPassword: ${this.repeatpasswordFormControl.value}
      `);

      this.buttonDisabled = true;

      this.authService.signup(
        this.nameFormControl.value??'',
        this.surnameFormControl.value??'',
        this.emailFormControl.value??'',
        this.passwordFormControl.value??''
      )
    }
  }

  isValid(): boolean {
    return (
      this.nameFormControl.valid &&
      this.surnameFormControl.valid &&
      this.emailFormControl.valid &&
      this.passwordFormControl.valid &&
      this.repeatpasswordFormControl.valid &&
      this.passwordFormControl.value == this.repeatpasswordFormControl.value &&
      this.isCheckboxChecked
    )
  }

  onCheckboxChange(isChecked: boolean) {
    this.isCheckboxChecked = isChecked;
  }

  close():void{
    this.dialog.closeAll();
    this.dialog.open(UfSocialLoginFormComponent, {
      maxWidth: '60vw',
      maxHeight: '75vh',

      panelClass: ['border-4', 'border-solid', 'border-gray-300', 'rounded-[30px]'],
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormControl } from '@angular/forms';
import { UfFormInputComponent } from '../uf-form-input/uf-form-input.component';
import { UfPasswordInputComponent } from '../uf-password-input/uf-password-input.component';
import { UfEmailInputComponent } from '../uf-email-input/uf-email-input.component';
import { UfCheckboxComponent } from '../uf-checkbox/uf-checkbox.component';
import { UfButtonComponent } from '../uf-button/uf-button.component';
import { MatDialogModule } from '@angular/material/dialog';

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
}
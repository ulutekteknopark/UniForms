import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UfFormInputComponent } from '../uf-form-input/uf-form-input.component';
import { UfPasswordInputComponent } from '../uf-password-input/uf-password-input.component';
import { UfEmailInputComponent } from '../uf-email-input/uf-email-input.component';
import { UfCheckboxComponent } from '../uf-checkbox/uf-checkbox.component';
import { UfButtonComponent } from '../uf-button/uf-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'uf-login-form',
  standalone: true,
  imports: [MatIcon,CommonModule, MatDialogModule, UfButtonComponent, UfEmailInputComponent, UfCheckboxComponent, UfPasswordInputComponent, UfFormInputComponent],
  templateUrl: './uf-login-form.component.html',
  styleUrl: './uf-login-form.component.scss',
})
export class UfLoginFormComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  onSubmit() {
      if(this.emailFormControl.valid && this.passwordFormControl.valid){
        console.log("Submitting email: " + this.emailFormControl.value + ", password: " + this.passwordFormControl.value);
      }
  }
}
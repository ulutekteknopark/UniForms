import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

import { UfSignupFormComponent } from '../uf-signup-form/uf-signup-form.component'
import { UfLoginFormComponent } from '../uf-login-form/uf-login-form.component';
import {
  UfFormInputComponent,
  UfButtonComponent,
  UfCheckboxComponent,
  UfPasswordInputComponent,
  UfEmailInputComponent,
} from '@uniforms/uf-web-components';

@Component({
  selector: 'uf-social-login-form',
  standalone: true,
  imports: [MatIcon, CommonModule, MatDialogModule, UfButtonComponent, UfEmailInputComponent, UfCheckboxComponent, UfPasswordInputComponent, UfFormInputComponent],
  templateUrl: './uf-social-login-form.component.html',
  styleUrl: './uf-social-login-form.component.scss',
})

export class UfSocialLoginFormComponent {
  constructor(public dialog: MatDialog) { }

  openLoginModal(): void {
    this.dialog.open(UfLoginFormComponent, {
      width: '60vw',
      maxWidth: '60vw',

      height: '75vh',
      maxHeight: '75vh',

      panelClass: ['border-4', 'border-solid', 'border-gray-300', 'rounded-[30px]'],
    });
  }

  openSignInModal(): void {
    this.dialog.open(UfSignupFormComponent, {
      width: '60vw',
      maxWidth: '60vw',

      height: '75vh',
      maxHeight: '75vh',

      panelClass: ['border-4', 'border-solid', 'border-gray-300', 'rounded-[30px]'],
    });
  }
}

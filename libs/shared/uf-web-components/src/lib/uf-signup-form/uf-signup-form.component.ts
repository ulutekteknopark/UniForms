import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle, } from '@angular/material/dialog';

import { UfFormInputComponent } from '../uf-form-input/uf-form-input.component';
import { UfPasswordInputComponent } from '../uf-password-input/uf-password-input.component';
import { UfEmailInputComponent } from '../uf-email-input/uf-email-input.component';
import { UfCheckboxComponent } from '../uf-checkbox/uf-checkbox.component';
import { UfButtonComponent } from '../uf-button/uf-button.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'uf-signup-form',
  standalone: true,
  imports: [CommonModule, UfFormInputComponent, UfEmailInputComponent, UfPasswordInputComponent, UfCheckboxComponent, UfButtonComponent, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './uf-signup-form.component.html',
  styleUrl: './uf-signup-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UfSignupFormComponent {}

@Component({
  imports: [],
})
export class DialogAnimationsExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
}

import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { UfButtonComponent } from '@uniforms/uf-web-components';
import { UfFormInputComponent } from '@uniforms/uf-web-components';
import { FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'uf-add-title-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, UfButtonComponent, UfFormInputComponent],
  templateUrl: './add-title-dialog.component.html',
  styleUrl: './add-title-dialog.component.scss',
})
export class AddTitleDialogComponent {
  @Input() isEditing: boolean = false;

  @Output() addTitleEvent = new EventEmitter<string | null>();
  titleFormControl = new FormControl('', [Validators.required]);

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    isEditing: boolean,
    text: ''
  }) {
    this.titleFormControl = new FormControl(this.data.text, [Validators.required]);

  }

  onAddClick() {
    if(this.titleFormControl.valid){
      this.addTitleEvent.emit(this.titleFormControl.value);
    }
  }
}

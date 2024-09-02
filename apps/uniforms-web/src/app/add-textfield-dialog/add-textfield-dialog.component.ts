import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { UfButtonComponent, UfCheckboxComponent } from '@uniforms/uf-web-components';
import { UfFormInputComponent } from '@uniforms/uf-web-components';
import { FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'uf-add-textfield-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, UfButtonComponent, UfFormInputComponent, UfCheckboxComponent],

  templateUrl: './add-textfield-dialog.component.html',
  styleUrl: './add-textfield-dialog.component.scss',
})
export class AddTextfieldDialogComponent {
  @Input() isEditing: boolean = false;
  @Output() addTextfieldEvent = new EventEmitter<{title: string, required: boolean}>();
  titleFormControl = new FormControl('', [Validators.required]);

  required: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    isEditing: boolean,
    text: string,
    id: number,
    required: boolean,
  }) {
    this.titleFormControl = new FormControl(this.data.text, [Validators.required]);
  }

  onAddClick() {
    if(this.titleFormControl.valid){
      this.addTextfieldEvent.emit({
        title: this.titleFormControl.value ?? '',
        required: this.required
      });
    }
  }
  
  onDateRequiredChange(checked: boolean){
    this.required = checked;
  }
}
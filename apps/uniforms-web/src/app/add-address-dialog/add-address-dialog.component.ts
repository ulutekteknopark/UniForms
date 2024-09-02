import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { UfButtonComponent, UfCheckboxComponent } from '@uniforms/uf-web-components';
import { UfFormInputComponent } from '@uniforms/uf-web-components';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'uf-add-address-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, UfButtonComponent, UfFormInputComponent, UfCheckboxComponent],
  templateUrl: './add-address-dialog.component.html',
  styleUrl: './add-address-dialog.component.scss',
})
export class AddAddressDialogComponent {
  @Input() isEditing: boolean = false;
  @Output() addAddressEvent = new EventEmitter<{title: string, required: boolean, choices: object,}>();

  required: boolean = false;
  choices: { [key: string]: any } = {
    city: true,
    district: true,
    postal_code: true,
    address: true,
    address2: false,
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    isEditing: boolean,
    text: string,
    id: number,
    required: boolean,
    choices: { [key: string]: any },
  }) {
    this.choices = data['choices'];
  }

  onAddClick() {
    this.addAddressEvent.emit({
      title: '',
      required: this.required,
      choices: this.choices,
    });
  }

  onRequiredChange(type: string, checked: boolean){
    if(type == 'required')
      this.required = checked;
    else{
      this.choices[type] = checked;
    }
  }
}

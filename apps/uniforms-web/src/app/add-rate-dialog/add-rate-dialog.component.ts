import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { UfButtonComponent, UfCheckboxComponent } from '@uniforms/uf-web-components';
import { UfFormInputComponent } from '@uniforms/uf-web-components';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'uf-add-rate-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, UfButtonComponent, UfFormInputComponent, UfCheckboxComponent],
  templateUrl: './add-rate-dialog.component.html',
  styleUrl: './add-rate-dialog.component.scss',
})
export class AddRateDialogComponent {
  @Input() isEditing: boolean = false;
  @Output() addRateEvent = new EventEmitter<{title: string, required: boolean, choices: object,}>();

  titleFormControl = new FormControl('', [Validators.required]);
  word_leftFormControl = new FormControl('', [Validators.required]);
  word_rightFormControl = new FormControl('', [Validators.required]);
  starCountFormControl = new FormControl(5, [Validators.required, Validators.min(3), Validators.max(10)]);

  required: boolean = false;
  choices: { [key: string]: any } = {
    word_left: "",
    word_right: "",
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    isEditing: boolean,
    text: string,
    id: number,
    required: boolean,
    choices: { [key: string]: any },
  }) {
    this.titleFormControl = new FormControl(this.data.text, [Validators.required]);
    if(!this.data.choices) return
    this.word_rightFormControl = new FormControl(this.data.choices["word_right"], [Validators.required]);
    this.word_leftFormControl = new FormControl(this.data.choices["word_left"], [Validators.required]);
    this.starCountFormControl = new FormControl(this.data.choices["starCount"], [Validators.required, Validators.min(1), Validators.max(10)]);
  }

  isValidForm(): boolean {
    return this.starCountFormControl.invalid ||
      this.word_leftFormControl.invalid ||
      this.word_rightFormControl.invalid ||
      this.titleFormControl.invalid
  }

  onAddClick() {
    if(!this.word_leftFormControl.valid) return;
    if(!this.word_rightFormControl.valid) return;
    if(!this.titleFormControl.valid) return;
    if(!this.starCountFormControl.valid) return;

    this.choices["word_right"] = this.word_rightFormControl.value ?? "";
    this.choices["word_left"] = this.word_leftFormControl.value ?? "";
    this.choices["starCount"] = this.starCountFormControl.value ?? 5;

    this.addRateEvent.emit({
      title: this.titleFormControl.value ?? '',
      required: this.required,
      choices: this.choices,
    });
  }

  onRequiredChange(checked: boolean){
    this.required = checked;
  }
}

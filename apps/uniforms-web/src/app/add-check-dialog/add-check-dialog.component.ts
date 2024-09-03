import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInput, MatLabel, MatFormField } from '@angular/material/input';
import { UfButtonComponent, UfCheckboxComponent } from '@uniforms/uf-web-components';
import { UfFormInputComponent } from '@uniforms/uf-web-components';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'uf-add-check-dialog',
  standalone: true,
  imports: [CommonModule, MatInput, MatLabel, MatFormField, MatDialogModule, UfButtonComponent, UfFormInputComponent, UfCheckboxComponent],
  templateUrl: './add-check-dialog.component.html',
  styleUrl: './add-check-dialog.component.scss',
})
export class AddCheckDialogComponent {
  @Input() isEditing: boolean = false;
  @Output() addCheckEvent = new EventEmitter<{title: string, required: boolean, choices: object,}>();

  titleFormControl = new FormControl('', [Validators.required]);

  required: boolean = false;
  choices: { [key: string]: any } = {
    strings: [""],
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    isEditing: boolean,
    text: string,
    id: number,
    required: boolean,
    choices: { [key: string]: any },
  }) {
    this.titleFormControl = new FormControl(this.data.text, [Validators.required]);
    if(!this.data.choices) return;
      this.choices = this.data.choices;
  }

  isValidForm(): boolean {
    return this.titleFormControl.invalid
  }

  onAddClick() {
    if(!this.titleFormControl.valid) return;

    this.addCheckEvent.emit({
      title: this.titleFormControl.value ?? '',
      required: this.required,
      choices: this.choices,
    });
  }

  onRequiredChange(checked: boolean){
    this.required = checked;
  }

  get strings(): string[]{
    let strings :string[] = this.choices['strings'];
    strings = strings.filter(str => str.length > 0);
    strings.push("");
    this.choices['strings'] = strings;
    return this.choices['strings'];
  }

  onInputBlur(ev: Event, index: number){
    const elm = ev.target as HTMLInputElement;
    let strings :string[] = this.choices['strings'];

    if (index < strings.length && elm.value.trim() != '') {
      strings[index] = elm.value.trim();
    }
    else if (index < strings.length && elm.value.trim() == '') {
      strings.splice(index, 1)
    }
    this.choices['strings'] = strings;
  }

  getAppearance(idx:number){
    if (idx == this.choices['strings'].length - 1) return 'fill';
    return "outline";
  }
}
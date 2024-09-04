import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormQuestion } from '../form-editor.component';
import {
  UfButtonComponent,
  UfCheckboxComponent,
  UfFormInputComponent,
} from '@uniforms/uf-web-components';

@Component({
  selector: 'uf-add-question-dialog',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatLabel,
    MatFormField,
    UfButtonComponent,
    UfFormInputComponent,
    UfCheckboxComponent,
  ],
  templateUrl: './add-question-dialog.component.html',
  styleUrl: './add-question-dialog.component.scss',
})
export class AddQuestionDialogComponent {
  @Input() isEditing: boolean = false;

  @Output() addEvent = new EventEmitter<FormQuestion>();

  titleFC = new FormControl('', [Validators.required]);
  isRequired = false;
  choices : { [id:string] : any } = {};

  questionChoices : string[] = ['', '']; // check ve radio soruları için

  // rate
  leftWordFC = new FormControl('', [Validators.required]);
  rightWordFC = new FormControl('', [Validators.required]);
  starCountFC = new FormControl(5, [Validators.required, Validators.min(3), Validators.max(10)]);

  // dropdown
  dropdownTextFC = new FormControl('');

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    isEditing: boolean,
    text: '',
    type: string,
    questionCount: number,
    position: number,
    required: boolean,
    choices?: { [id:string] : any },
  }) {
    this.titleFC = new FormControl(this.data.text, [Validators.required]);

    if (data.required)
      this.isRequired = data.required;

    if( data.choices ){
      if(['radio', 'check', 'dropdown'].includes(this.data.type) && 'options' in data.choices){
        this.questionChoices = data.choices['options'];
        if(this.data.type == 'dropdown'){
          this.dropdownTextFC.setValue(data.choices['dropdown_title']);
        }
      }
      else if('rate' == data.type){
        this.rightWordFC.setValue(data.choices['rightWord']);
        this.leftWordFC.setValue(data.choices['leftWord']);
        this.starCountFC.setValue(data.choices['starCount']);
        this.choices = data.choices;
      }
      else {
        this.choices = data.choices;
      }
    }
  }

  onRequiredChange(req: boolean){
    this.isRequired = req;
  }

  onAddressRequiredChange(key: string, res: boolean){
    this.choices[key] = res;
  }

  isValid() {
    if(this.titleFC.invalid)
      return false;

    if(this.data.type == 'rate'){
      if(this.rightWordFC.invalid || this.leftWordFC.invalid || this.starCountFC.invalid)
        return false;
    }

    if(['radio', 'check', 'dropdown'].includes(this.data.type)){
      if (this.questionChoices.length <= 2)
        return false;
    }

    if(this.data.type == 'address'){
      // address seçeneklerinden en az bir tanesi seçilmiş mi ?
      // boş bir soru oluşmasını engelle
      let num = 0;
      for(const key of Object.keys(this.choices)) {
        num += this.choices[key];
      }
      if (num == 0){
        return false;
      }
    }

    return true;
  }

  onAddClick() {
    if(this.data.type == 'rate'){
      this.choices = {
        'rightWord': this.rightWordFC.value,
        'leftWord': this.leftWordFC.value,
        'starCount': this.starCountFC.value,
      }
    }
    else if(['radio', 'check', 'dropdown'].includes(this.data.type)){
      this.choices['options'] = this.questionChoices;

      if('dropdown' == this.data.type){
        this.choices['dropdown_title'] = this.dropdownTextFC.value;
      }
    }

    if(this.titleFC.valid){
      const question :FormQuestion = {
        id: this.data.questionCount,
        type: this.data.type,
        position: this.data.position,
        answers: [],

        required: this.isRequired,
        text: this.titleFC.value ?? '',
        choices: this.choices,
      };
      this.addEvent.emit(question);
    }
  }

  getAppearance(idx: number){
    return idx == this.questionChoices.length - 1 ? 'fill' : 'outline';
  }

  onInputBlur(idx: number, ev: Event){
    const elm = ev.target as HTMLInputElement;
    let choices :string[] = this.questionChoices;

    if (idx < choices.length && elm.value.trim() != '') {
      choices[idx] = elm.value.trim();
    }
    else if (idx < choices.length && elm.value.trim() == '') {
      choices.splice(idx, 1);
    }
    choices = choices.filter( str => str.length > 0 )
    choices.push('');
    this.questionChoices = choices;
  }

  get baslik() {
    switch (this.data.type) {
      case 'title':
        return 'Başlık';
      case 'name':
        return 'Ad Soyad';
      case 'email':
        return 'Email';
      case 'address':
        return 'Adres';
      case 'phone':
        return 'Telefon';
      case 'date':
        return 'Tarih';
      case 'text':
        return 'Metin';
      case 'rate':
        return 'Ölçek Değerlendirme';
      case 'check':
        return 'Tik Değerlendirme';
      case 'radio':
        return 'Seçili Değerlendirme';
      case 'dropdown':
        return 'Açılır Menü';
      default:
        return 'Soru';
    }
  }
}

import { CommonModule, NgFor } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UfFormQuestionComponent } from './form-question/form-question.component';
import { AddQuestionDialogComponent } from './add-question-dialog/add-question-dialog.component';
import {
  UfFormElementSelectButtonComponent,
  UfTextareaComponent,
  UfFormInputComponent,
} from '@uniforms/uf-web-components';

export interface FormQuestion {
  id: number,
  type: string,
  required: boolean,
  position: number, // sorunun anketteki sırası
  editable: boolean, // soru düzenlenebilir mi ? sadece editörde true olmalı

  text: string, // soru

  choices: object, // sorunun şıkları
  answers: string[], // kullanıcının cevapları
}

const ModalStyle = {
  maxWidth: '100vw',
  maxHeight: '100vh',
  // width değerini ayarlayınca dar ekranlarda dialogun sağ çerçevesi gözükmüyor
  // width: '30vw',
  panelClass: ['border-4', 'border-solid', 'border-gray-300', 'rounded-[30px]'],
  backdropClass: 'backdrop-blur-sm',
}

@Component({
  selector: 'uf-form-editor',
  standalone: true,
  imports: [CommonModule, MatFabButton, MatIcon, NgFor, UfFormQuestionComponent, UfFormInputComponent, UfFormQuestionComponent, UfFormElementSelectButtonComponent, UfTextareaComponent],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss',
})

export class FormEditorComponent {
  questions :FormQuestion[] = [];
  question_count_id : number = 0;

  constructor(public dialog: MatDialog) { }

  addQuestion(type: string){
    const ModalOpts = {
      data: {
        type,
        isEditing: false,
        position: this.questions.length,
        questionCount: this.question_count_id,
      },
      ...ModalStyle,
    }

    const dialogRef = this.dialog.open(AddQuestionDialogComponent, ModalOpts);

    dialogRef.componentInstance.addEvent.subscribe((question: FormQuestion) => {
      this.questions.push(question);
      this.question_count_id++;
    });
  }

  editQuestion(question: FormQuestion) {
    const ModalOpts = {
      data: {
        isEditing: true,
        type: question.type,
        text: question.text,
        choices: question.choices,
        questionCount: question.id,
        position: question.position,
        required: question.required,
      },
      ...ModalStyle,
    }

    const dialogRef = this.dialog.open(AddQuestionDialogComponent, ModalOpts);

    dialogRef.componentInstance.addEvent.subscribe((question: FormQuestion) => {
      this.questions = this.questions.filter( q => q.id != question.id);
      this.questions.push(question);
      this.questions.sort((q1, q2) => q1.position - q2.position);
    });
  }

  changePosition(questionId: number, direction: number) {
    const index = this.questions.findIndex(q => q.id === questionId);
    const newIndex = index + direction;

    if (newIndex >= 0 && newIndex < this.questions.length) {
      const temp = this.questions[newIndex];
      this.questions[newIndex] = this.questions[index];
      this.questions[index] = temp;

      this.questions[newIndex].position = newIndex;
      this.questions[index].position = index;
    }
  }

  deleteQuestion(questionId: number) {
    this.questions = this.questions.filter(q => q.id !== questionId);
    this.questions.forEach((q, i) => (q.position = i));
  }

  save(){
    alert("save()");
  }

  test(){
    alert("clicked");
  }
}

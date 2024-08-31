import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddTitleDialogComponent } from '../add-title-dialog/add-title-dialog.component';
import { AddDateDialogComponent } from '../add-date-dialog/add-date-dialog.component';
import { AddRateDialogComponent } from '../add-rate-dialog/add-rate-dialog.component';
import { AddAddressDialogComponent } from '../add-address-dialog/add-address-dialog.component';
import { AddCheckDialogComponent } from '../add-check-dialog/add-check-dialog.component';
import { AddRadioDialogComponent } from '../add-radio-dialog/add-radio-dialog.component';
import {
  UfFormElementSelectButtonComponent,
  UfFormInputComponent,
  UfFormQuestionComponent,
  UfTextareaComponent,
  FormQuestion,
} from '@uniforms/uf-web-components';

const ModalStyle = {
  maxWidth: '100vw',
  maxHeight: '100vh',
  width: '30vw', // Set the desired width here
  panelClass: ['border-4', 'border-solid', 'border-gray-300', 'rounded-[30px]'],
  backdropClass: 'backdrop-blur-sm',
}

@Component({
  selector: 'uf-form-editor',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    UfFormQuestionComponent,
    UfFormElementSelectButtonComponent,
    UfFormInputComponent,
    UfTextareaComponent,
  ],
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss'],
})
export class FormEditorComponent {
  questions: FormQuestion[] = [];
  questionCounter: number = 0;

  constructor(public dialog: MatDialog) { }

  addQuestion(type: string, text: string = ' ', editable: boolean = true, required: boolean = true, choices: object = {}) {
    const newQuestion: FormQuestion = {
      id: ++this.questionCounter,
      text: text,
      required: required,

      position: this.questions.length,
      type: type,
      editable: editable,

      choices: choices,
    };

    this.questions.push(newQuestion);
  }

  editQuestion(question: FormQuestion) {
    if(question.type == 'title'){
      this.openEditTitleDialog(question);
    }else if(question.type == 'date'){
      this.openEditDateDialog(question);
    }else if(question.type == 'rate'){
      this.openEditRateDialog(question);
    }else if(question.type == 'address'){
      this.openEditAddressDialog(question);
    }else if(question.type == 'check'){
      this.openEditCheckDialog(question);
    }else if(question.type == 'radio'){
      this.openEditRadioDialog(question);
    }
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

  // TODO: organize similar functions

  openAddTitleDialog(): void {
    const dialogRef = this.dialog.open(AddTitleDialogComponent, {
      data: {
        isEditing: false,
      },
      ...ModalStyle,
    });

    dialogRef.componentInstance.addTitleEvent.subscribe((title: string) => {
      this.addQuestion('title', title);
    });
  }

  openEditTitleDialog(question: FormQuestion): void {
    const dialogRef = this.dialog.open(AddTitleDialogComponent, {
      data: {
        isEditing: true,
        id: question.id,
        text: question.text
      },
      ...ModalStyle,
    });

    dialogRef.componentInstance.addTitleEvent.subscribe((title: string) => {
      let filteredQuestion = this.questions.filter(q => q.id === question.id)[0].text = title;
    });
  }

  openAddDateDialog(): void {
    const dialogRef = this.dialog.open(AddDateDialogComponent, {
      data: {
        isEditing: false,
      },
      ...ModalStyle,
    });

    dialogRef.componentInstance.addDateEvent.subscribe((eventData) => {
      this.addQuestion('date', eventData.title, true, eventData.required);
    });
  }

  openEditDateDialog(question: FormQuestion): void {
    const dialogRef = this.dialog.open(AddDateDialogComponent, {
      data: {
        isEditing: true,
        id: question.id,
        text: question.text,
        required: question.required,
      },
      ...ModalStyle
    });

    dialogRef.componentInstance.addDateEvent.subscribe((eventData) => {
      let filteredQuestion = this.questions.filter(q => q.id === question.id)[0];
      filteredQuestion.required = eventData.required;
      filteredQuestion.text = eventData.title;
    });
  }

  openAddRateDialog(): void {
    const dialogRef = this.dialog.open(AddRateDialogComponent, {
      data: {
        isEditing: false,
      },
      ...ModalStyle,
      width: '60vw',
    });

    dialogRef.componentInstance.addRateEvent.subscribe((eventData) => {
      this.addQuestion('rate', eventData.title, true, eventData.required, eventData.choices);
    });
  }

  openEditRateDialog(question: FormQuestion): void {
    const dialogRef = this.dialog.open(AddRateDialogComponent, {
      data: {
        isEditing: true,
        id: question.id,
        text: question.text,
        choices: question.choices,
        required: question.required,
      },
      ...ModalStyle,
      width: '60vw',
    });

    dialogRef.componentInstance.addRateEvent.subscribe((eventData) => {
      let filteredQuestion = this.questions.filter(q => q.id === question.id)[0];
      filteredQuestion.required = eventData.required;
      filteredQuestion.text = eventData.title;
      filteredQuestion.choices = eventData.choices;
    });
  }

  openAddAddressDialog(): void {
    const dialogRef = this.dialog.open(AddAddressDialogComponent, {
      data: {
        isEditing: false,
      },
      ...ModalStyle,
    });

    dialogRef.componentInstance.addAddressEvent.subscribe((eventData) => {
      this.addQuestion('address', eventData.title, true, eventData.required, eventData.choices);
    });
  }

  openEditAddressDialog(question: FormQuestion): void {
    const dialogRef = this.dialog.open(AddAddressDialogComponent, {
      data: {
        isEditing: true,
        id: question.id,
        text: question.text,
        choices: question.choices,
        required: question.required,
      },
      ...ModalStyle,
    });

    dialogRef.componentInstance.addAddressEvent.subscribe((eventData) => {
      let filteredQuestion = this.questions.filter(q => q.id === question.id)[0];
      filteredQuestion.required = eventData.required;
      filteredQuestion.text = eventData.title;
      filteredQuestion.choices = eventData.choices;
    });
  }

  openAddCheckDialog(): void {
    const dialogRef = this.dialog.open(AddCheckDialogComponent, {
      data: {
        isEditing: false,
      },
      ...ModalStyle,
    });

    dialogRef.componentInstance.addCheckEvent.subscribe((eventData) => {
      this.addQuestion('check', eventData.title, true, eventData.required, eventData.choices);
    });
  }

  openEditCheckDialog(question: FormQuestion): void {
    const dialogRef = this.dialog.open(AddCheckDialogComponent, {
      data: {
        isEditing: true,
        id: question.id,
        text: question.text,
        choices: question.choices,
        required: question.required,
      },
      ...ModalStyle,
    });

    dialogRef.componentInstance.addCheckEvent.subscribe((eventData) => {
      let filteredQuestion = this.questions.filter(q => q.id === question.id)[0];
      filteredQuestion.required = eventData.required;
      filteredQuestion.text = eventData.title;
      filteredQuestion.choices = eventData.choices;
    });
  }

  openAddRadioDialog(): void {
    const dialogRef = this.dialog.open(AddRadioDialogComponent, {
      data: {
        isEditing: false,
      },
      ...ModalStyle,
    });

    dialogRef.componentInstance.addRadioEvent.subscribe((eventData) => {
      this.addQuestion('radio', eventData.title, true, eventData.required, eventData.choices);
    });
  }

  openEditRadioDialog(question: FormQuestion): void {
    const dialogRef = this.dialog.open(AddRadioDialogComponent, {
      data: {
        isEditing: true,
        id: question.id,
        text: question.text,
        choices: question.choices,
        required: question.required,
      },
      ...ModalStyle,
    });

    dialogRef.componentInstance.addRadioEvent.subscribe((eventData) => {
      let filteredQuestion = this.questions.filter(q => q.id === question.id)[0];
      filteredQuestion.required = eventData.required;
      filteredQuestion.text = eventData.title;
      filteredQuestion.choices = eventData.choices;
    });
  }



  save() {
    alert("save()");
  }

  test() {
    alert("clicked");
  }
}

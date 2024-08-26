import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';

import { UfFormInputComponent, UfFormQuestionComponent, UfTextareaComponent } from '@uniforms/uf-web-components';
import { UfFormElementSelectButtonComponent } from '@uniforms/uf-web-components';
import { AddTitleDialogComponent } from '../add-title-dialog/add-title-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AddDateDialogComponent } from '../add-date-dialog/add-date-dialog.component';

interface FormQuestion {
  id: number;
  text: string;
  required: boolean;
  
  position: number;
  type: string;
  editable: boolean;
}

@Component({
  selector: 'uf-form-editor',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, UfFormQuestionComponent, UfFormElementSelectButtonComponent,
    UfFormInputComponent, UfTextareaComponent
  ],
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss'],
})
export class FormEditorComponent {
  questions: FormQuestion[] = [];
  questionCounter: number = 0;

  constructor(public dialog: MatDialog) { }

  addQuestion(type: string, text: string = ' ', editable: boolean = true, required: boolean = true) {
    const newQuestion: FormQuestion = {
      id: ++this.questionCounter,
      text: text,
      required: required,
      
      position: this.questions.length,
      type: type,
      editable: editable,
    };

    this.questions.push(newQuestion);
  }

  editQuestion(question: FormQuestion) {
    if(question.type == 'title'){
      this.openEditTitleDialog(question);
    }else if(question.type == 'date'){
      this.openEditDateDialog(question);
    }
  }

  changePosition(questionId: number, direction: number) {
    const index = this.questions.findIndex(q => q.id === questionId);
    const newIndex = index + direction;

    if (newIndex >= 0 && newIndex < this.questions.length) {
      const temp = this.questions[newIndex];
      this.questions[newIndex] = this.questions[index];
      this.questions[index] = temp;
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
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '30vw', // Set the desired width here
      panelClass: ['border-4', 'border-solid', 'border-gray-300', 'rounded-[30px]'],
      backdropClass: 'backdrop-blur-sm',
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
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '30vw', // Set the desired width here
      panelClass: ['border-4', 'border-solid', 'border-gray-300', 'rounded-[30px]'],
      backdropClass: 'backdrop-blur-sm',
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
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '30vw', // Set the desired width here
      panelClass: ['border-4', 'border-solid', 'border-gray-300', 'rounded-[30px]'],
      backdropClass: 'backdrop-blur-sm',
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
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '30vw', // Set the desired width here
      panelClass: ['border-4', 'border-solid', 'border-gray-300', 'rounded-[30px]'],
      backdropClass: 'backdrop-blur-sm',
    });

    dialogRef.componentInstance.addDateEvent.subscribe((eventData) => {
      let filteredQuestion = this.questions.filter(q => q.id === question.id)[0];
      filteredQuestion.required = eventData.required;
      filteredQuestion.text = eventData.title;
    });
  }

  save() {
    alert("save()");
  }

  test() {
    alert("clicked");
  }
}

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';

import { UfFormInputComponent, UfFormQuestionComponent, UfTextareaComponent } from '@uniforms/uf-web-components';
import { UfFormElementSelectButtonComponent } from '@uniforms/uf-web-components';
import { AddTitleDialogComponent } from '../add-title-dialog/add-title-dialog.component';
import { MatDialog } from '@angular/material/dialog';

interface FormQuestion {
  id: number;
  text: string
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

  addQuestion(type: string, text: string = ' ', editable: boolean = true) {
    const newQuestion: FormQuestion = {
      id: ++this.questionCounter,
      text: text,
      position: this.questions.length,
      type: type,
      editable: editable,
    };
    this.questions.push(newQuestion);
  }

  editQuestion(question: FormQuestion) {
    if(question.type == 'title'){
      this.openEditTitleDialog(question);
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
      console.log(filteredQuestion);
    });

  }


  save() {
    alert("save()");
  }

  test() {
    alert("clicked");
  }
}

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';

import { UfFormInputComponent, UfFormQuestionComponent, UfTextareaComponent } from '@uniforms/uf-web-components';
import { UfFormElementSelectButtonComponent } from '@uniforms/uf-web-components';

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

  addQuestion(type: string) {
    const newQuestion: FormQuestion = {
      id: ++this.questionCounter,
      text: '',
      position: this.questions.length,
      type: type,
      editable: true,
    };
    this.questions.push(newQuestion);
  }

  editQuestion(questionId: number) {
    alert(`edit: ${questionId}`);
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

  save() {
    alert("save()");
  }

  test() {
    alert("clicked");
  }
}

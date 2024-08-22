import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'uf-form-question',
  standalone: true,
  imports: [CommonModule, MatFabButton, MatIcon],
  templateUrl: './uf-form-question.component.html',
  styleUrl: './uf-form-question.component.scss',
})
export class UfFormQuestionComponent {
  @Input() editable: boolean = false;

  @Input() image: string = "";
  @Input() question: string = "";
  @Input() type: string = "name";
  @Input() required: boolean = false;

  edit(){
    alert("edit question");
  }

  delete(){
    alert("delete question");
  }
}

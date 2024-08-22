import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import {
  UfFormQuestionComponent,
  UfFormElementSelectButtonComponent,
  UfTextareaComponent,
  UfFormInputComponent,
} from '@uniforms/uf-web-components';

@Component({
  selector: 'uf-form-editor',
  standalone: true,
  imports: [CommonModule, MatFabButton, MatIcon, UfFormInputComponent, UfFormQuestionComponent, UfFormElementSelectButtonComponent, UfTextareaComponent],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss',
})
export class FormEditorComponent implements AfterViewInit {
  @ViewChild("formContainer", { read: ViewContainerRef }) formContainer!: ViewContainerRef;
  ref!: ComponentRef<UfFormQuestionComponent>

  questions:ComponentRef<UfFormQuestionComponent>[] = [];

  ngAfterViewInit() {
    console.log(this.formContainer);
  }

  removeChild() {
    const index = this.formContainer.indexOf(this.ref.hostView)
    if (index != -1) this.formContainer.remove(index)
  }

  addQuestion(type: string){
    this.ref = this.formContainer.createComponent(UfFormQuestionComponent)
    this.ref.instance.type = type;
    this.ref.instance.editable = true;
    this.questions.push(this.ref)
  }

  save(){
    alert("save()");
  }

  test(){
    alert("clicked");
  }
}

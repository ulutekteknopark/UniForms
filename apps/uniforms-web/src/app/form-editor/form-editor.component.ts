import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  OutputRefSubscription,
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
export class FormEditorComponent {
  @ViewChild("formContainer", { read: ViewContainerRef }) formContainer!: ViewContainerRef;

  questions: ComponentRef<UfFormQuestionComponent>[] = [];
  listeners: OutputRefSubscription[] = [];

  addQuestion(type: string){
    const ref = this.formContainer.createComponent(UfFormQuestionComponent);

    ref.setInput("id", Math.ceil(Math.random() * 10000));
    ref.setInput("type", type);
    ref.setInput("editable", true);

    let editListener = ref.instance.editEvent.subscribe(()=>{
      // TODO
      alert("edit:" + ref.instance.id);
    })

    let deletionListener = ref.instance.deleteEvent.subscribe(()=>{
      this.questions = this.questions.
        filter((elm) => elm.instance.id != ref.instance.id);

      this.listeners = this.listeners.
        filter(elm => elm != deletionListener).
        filter(elm => elm != editListener);

      deletionListener.unsubscribe();
      ref.destroy();
    })

    this.listeners.push(deletionListener, editListener);
    this.questions.push(ref);
  }

  save(){
    alert("save()");
  }

  test(){
    alert("clicked");
  }
}

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

    ref.setInput("id", Math.ceil(Math.random() * 1000000));

    var position = 0;
    this.questions.forEach(elm => {
      if (elm.instance.position >= position)
        position = elm.instance.position + 1;
    })
    ref.setInput("position", position);

    ref.setInput("type", type);
    ref.setInput("editable", true);

    let editListener = ref.instance.editEvent.subscribe(()=>{
      // TODO
      alert("edit:" + ref.instance.id);
    })

    let changePositionListener = ref.instance.changePositionEvent.subscribe(direction => {
      // 3. soru aşağı indirilirse 4. soru olur. 4. soru 3. soru olur.
      // 3. soru yukarı çıkarılırsa 2. soru olur. 2. soru 3. soru olur.
      var other_node_position = ref.instance.position + direction;
      var node_arr = this.questions.filter(
        elm => other_node_position == elm.instance.position
      );

      if (node_arr.length > 1)
        throw new Error('Aynı pozisyonda birden fazla soru var');
      if (node_arr.length == 0)
        throw new Error('Değiştirilecek pozisyonda soru bulunamadı');

      var node = node_arr[0];

      node.instance.position = ref.instance.position;
      ref.instance.position = other_node_position;

      this.formContainer.move(ref.hostView, ref.instance.position);
    })

    let deletionListener = ref.instance.deleteEvent.subscribe(()=>{
      // silinen sorudan sonraki soruların pozisyonlarını düşür
      // 2. soru silindiğinde 4. soru 3. soru olur
      this.questions.forEach(elm => {
        if (elm.instance.position >= ref.instance.position)
          elm.instance.position -= 1;
      })

      // soruyu diziden çıkar
      this.questions = this.questions.
        filter((elm) => elm.instance.id != ref.instance.id);

      // sorunun dinleyicilerini diziden çıkar
      this.listeners = this.listeners.
        filter(elm => elm !== changePositionListener).
        filter(elm => elm !== deletionListener).
        filter(elm => elm !== editListener);

      // temizle
      changePositionListener.unsubscribe();
      deletionListener.unsubscribe();
      editListener.unsubscribe();
      ref.destroy();
    })

    this.listeners.push(deletionListener, editListener, changePositionListener);
    this.questions.push(ref);
  }

  save(){
    alert("save()");
  }

  test(){
    alert("clicked");
  }
}

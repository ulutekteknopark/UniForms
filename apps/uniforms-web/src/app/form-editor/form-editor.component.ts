import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { UfFormInputComponent } from '@uniforms/uf-web-components';

@Component({
  selector: 'uf-form-editor',
  standalone: true,
  imports: [CommonModule, MatIcon, UfFormInputComponent],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss',
})
export class FormEditorComponent {
  test(){
    alert("clicked");
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import {
  UfFormInputComponent,
  UfFormElementSelectButtonComponent,
} from '@uniforms/uf-web-components';

@Component({
  selector: 'uf-form-editor',
  standalone: true,
  imports: [CommonModule, MatFabButton, MatIcon, UfFormInputComponent, UfFormElementSelectButtonComponent],
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss',
})
export class FormEditorComponent {
  test(){
    alert("clicked");
  }
}

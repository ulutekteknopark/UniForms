import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule} from '@angular/forms';

@Component({
  selector: 'uf-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './uf-textarea.component.html',
  styleUrl: './uf-textarea.component.scss',
})
export class UfTextareaComponent {
  @Input() title: string = ""
  @Input() placeholder: string = ""
  @Input() rows: number = 5;
  @Input() error: string = "Lütfen geçerli bir değer girin!";
  @Input() icon: string | undefined = '';
  @Input() inputFormControl: FormControl = new FormControl('');
}

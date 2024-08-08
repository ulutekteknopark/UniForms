import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'uf-card',
  templateUrl: './uf-card.component.html',
  styleUrl: './uf-card.component.scss',
  standalone: true,
  imports: [NgIf],
})
export class UfCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() image: string = '';
  @Input() rounded: boolean = false;
  @Input() backgroundColor: string = '#ffffff';
  @Input() textColor: string = '#ffffff';
}

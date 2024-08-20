import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uf-intro-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uf-intro-card.component.html',
  styleUrl: './uf-intro-card.component.scss',
})
export class UfIntroCardComponent {
  @Input() title: string = "Default";
  @Input() content: string = "Default";
  @Input() image: string = "Default";
}

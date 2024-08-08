import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uf-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uf-button.component.html',
  styleUrl: './uf-button.component.scss',
})
export class UfButtonComponent {
  @Input() label: string = 'Button';
  @Input() backgroundColor: string = 'white';
  @Input() textColor: string = 'white';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() fontWeight: 'bold' | 'normal' = 'normal';
  @Input() round: boolean = false;
  @Input() disabled: boolean = false;
}

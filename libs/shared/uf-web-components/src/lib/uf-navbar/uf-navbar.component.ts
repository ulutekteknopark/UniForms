import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uf-navbar',
  templateUrl: './uf-navbar.component.html',
  styleUrl: './uf-navbar.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class UfNavbarComponent {
  @Input() brandText: string = 'Brand Name';
  @Input() links: { label: string; url: string }[] = [];
}

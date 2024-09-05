import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { UfSocialLoginFormComponent } from '../../dynamic/login-modal/uf-social-login-form/uf-social-login-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  constructor(public dialog: MatDialog) { }

  openLoginModal(): void {
    this.dialog.open(UfSocialLoginFormComponent, {
      maxWidth: '60vw',
      maxHeight: '75vh',

      panelClass: ['border-4', 'border-solid', 'border-gray-300', 'rounded-[30px]'],
      backdropClass: 'backdrop-blur-sm',
    });
  }
}

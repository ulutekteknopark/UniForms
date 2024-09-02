import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { UfSocialLoginFormComponent } from '../uf-social-login-form/uf-social-login-form.component';
import { AuthService } from '../auth/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router)

  public user = this.authService.user

  constructor(public dialog: MatDialog) { }

  openLoginModal(): void {
    this.dialog.open(UfSocialLoginFormComponent, {
      maxWidth: '60vw',
      maxHeight: '75vh',

      panelClass: ['border-4', 'border-solid', 'border-gray-300', 'rounded-[30px]'],
      backdropClass: 'backdrop-blur-sm',
    });
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}

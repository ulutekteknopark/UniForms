import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";

@Component({
  selector: 'uf-google-login-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uf-google-login-button.component.html',
  styleUrl: './uf-google-login-button.component.scss',
})

export class UfGoogleLoginButtonComponent implements OnInit {
  user!: SocialUser;
  loggedIn!: boolean;

  constructor(private authService: SocialAuthService) { }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
}

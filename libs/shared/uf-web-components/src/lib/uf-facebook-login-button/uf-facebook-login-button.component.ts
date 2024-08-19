import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookLoginProvider, SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";

@Component({
  selector: 'uf-facebook-login-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uf-facebook-login-button.component.html',
  styleUrl: './uf-facebook-login-button.component.scss',
})

export class UfFacebookLoginButtonComponent implements OnInit {
  user!: SocialUser;
  loggedIn!: boolean;

  constructor(private authService: SocialAuthService) { }

  refreshToken(): void {
    this.authService.refreshAuthToken(FacebookLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'uf-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'uniforms-web';
}

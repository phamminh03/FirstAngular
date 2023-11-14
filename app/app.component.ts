import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
})

export class AppComponent {
  title = 'Homes';
}

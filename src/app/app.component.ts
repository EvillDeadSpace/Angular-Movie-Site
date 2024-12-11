import { DarkModeService } from './services/dark-mode.service';
import { Component, HostBinding, inject, Inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending/trending.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AboutComponent,
    MovieComponent,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    TrendingComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Projekat_1';

  darkMode = signal<boolean>(false);

  @HostBinding('class.white') get mode() {
    return this.darkMode();
  }
  DarkModeService: DarkModeService = inject(DarkModeService);
}

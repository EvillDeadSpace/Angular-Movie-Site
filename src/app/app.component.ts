import {
  Component,
  HostBinding,
  inject,
  Inject,
  signal,
  OnInit,
} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending/trending.component';
import { CommonModule } from '@angular/common';
import { DarkModeService } from './services/dark-mode.service';
import { O } from '@angular/cdk/keycodes';
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
export class AppComponent implements OnInit {
  darkMode = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.darkMode = darkMode;
      if (darkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }
}

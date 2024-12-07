import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'movie', component: MovieComponent },
];

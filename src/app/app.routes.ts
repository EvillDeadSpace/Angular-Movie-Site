import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' },
  { path: 'about', component: AboutComponent },
  { path: 'movie', component: MovieComponent },
];

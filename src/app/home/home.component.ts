import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TrendingComponent } from '../trending/trending.component';
@Component({
  selector: 'app-home',
  imports: [MatIconModule, TrendingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

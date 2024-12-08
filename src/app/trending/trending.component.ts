import { cardData } from '../data';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ReusableCardComponent } from '../reusable-card/reusable-card.component';
import { ReusableCardData } from '../reusable-card.model';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-trending',
  imports: [MatIconModule, ReusableCardComponent, NgFor],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
})
export class TrendingComponent {
  cardData: ReusableCardData[] = cardData;
}

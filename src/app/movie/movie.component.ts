import { Component } from '@angular/core';
import { cardData } from '../dataNewMovie';
import { MatIconModule } from '@angular/material/icon';
import { ReusableCardComponent } from '../reusable-card/reusable-card.component';
import { ReusableCardData } from '../reusable-card.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-movie',
  imports: [MatIconModule, ReusableCardComponent, NgFor],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  cardData: ReusableCardData[] = cardData;
}

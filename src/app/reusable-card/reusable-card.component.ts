import { Component, Input } from '@angular/core';
import { ReusableCardData } from '../reusable-card.model';

import { NgFor } from '@angular/common';

@Component({
  imports: [NgFor],
  selector: 'app-reusable-card',
  templateUrl: './reusable-card.component.html',
  styleUrls: ['./reusable-card.component.css'],
})
export class ReusableCardComponent {
  @Input() cardData: ReusableCardData | undefined;
}

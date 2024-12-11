import { CommonModule } from '@angular/common';
import { DarkModeService } from './../services/dark-mode.service';
import { Component, HostBinding, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  darkModeService: DarkModeService = inject(DarkModeService);

  whiteMode = signal<boolean>(false);

  @HostBinding('class.dark') get mode() {
    return this.whiteMode();
  }

  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
  }
}

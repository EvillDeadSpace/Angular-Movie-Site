import { CommonModule } from '@angular/common';
import { DarkModeService } from './../services/dark-mode.service';
import { Component, HostBinding, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  darkMode = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.darkMode = darkMode;
    });
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  toggleDarkMode() {
    this.darkModeSubject.next(!this.darkModeSubject.value);
  }

  setDarkMode(value: boolean) {
    this.darkModeSubject.next(value);
  }
}

import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  checked: boolean = false;

  private darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor(private themeService: ThemeService) {
    this.initTheme();
    this.darkThemeMediaQuery.addEventListener('change', this.onTheme.bind(this));
  }

  /**
   * Initializes the theme for the application based on stored user preferences or system settings.
   * If a theme is stored in local storage, it is applied.
   * Otherwise, it checks the system's dark mode setting and applies the appropriate theme.
   *
   */
  private initTheme() {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      this.applyTheme(storedTheme);
    } else {
      if (this.darkThemeMediaQuery.matches) {
        this.checked = true;
        this.applyTheme('dark');
      } else {
        this.applyTheme('light');
      }
    }
  }

  /**
   * Applies the specified theme to the application.
   *
   * @param {string} theme - The name of the theme to apply. It could be 'dark' or any other name.
   */
  private applyTheme(theme: string) {
    if (theme === 'dark') {
      this.checked = true;
      this.setDarkTheme();
    } else {
      this.checked = false;
      this.setLightTheme();
    }
  }

  /**
   * Toggles the application theme based on the current state.
   * If the theme is currently checked, it sets the dark theme.
   * Otherwise, it sets the light theme.
   *
   * @param event - The event object that triggered the theme change.
   */
  onTheme(event: any) {
    if (this.checked) {
      this.applyTheme('dark');
    } else {
      this.applyTheme('light');
    }
    // Aquí puedes llamar a la función que desees
  }

  /**
   * Sets the dark theme for the application by switching the theme and updating the local storage.
   */
  private setDarkTheme() {
    this.themeService.switchTheme('theme-aura-dark-amber');
    localStorage.setItem('theme', 'dark');
  }

  /**
   * Sets the application theme to a light variant.
   * This method changes the theme by invoking the themeService and updates the local storage to persist the theme choice.
   */
  private setLightTheme() {
    this.themeService.switchTheme('theme-aura-light-amber');
    localStorage.setItem('theme', 'light');
  }
}

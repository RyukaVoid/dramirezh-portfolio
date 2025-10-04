import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'preferred-theme';

  private _isDarkMode = signal<boolean>(this.getInitialTheme());

  readonly isDarkMode = this._isDarkMode.asReadonly();

  constructor() {
    this.applyTheme(this._isDarkMode());
  }

  private getInitialTheme(): boolean {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      return savedTheme === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleTheme(): void {
    const newTheme = !this._isDarkMode();
    this._isDarkMode.set(newTheme);
    this.applyTheme(newTheme);
    this.saveTheme(newTheme ? 'dark' : 'light');
  }

  setTheme(theme: Theme): void {
    const isDark = theme === 'dark';
    this._isDarkMode.set(isDark);
    this.applyTheme(isDark);
    this.saveTheme(theme);
  }

  private applyTheme(isDark: boolean): void {
    const theme = isDark ? 'dark' : 'light';

    document.documentElement.classList.add('theme-transitioning');

    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', isDark);

    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 300);
  }

  private saveTheme(theme: Theme): void {
    localStorage.setItem(this.THEME_KEY, theme);
  }
}

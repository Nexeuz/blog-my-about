import { Injectable } from '@angular/core';
import {ThemeQuery} from './theme.query';
import {ThemeStore} from './theme.store';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme$ = this.query.select(it => it.isDark);
  constructor(private store: ThemeStore,
              private query: ThemeQuery) { }

  toggleTheme(value: boolean): void {
    this.store.update((state) => ({
      ...state,
      isDark: value
    }));
  }
}

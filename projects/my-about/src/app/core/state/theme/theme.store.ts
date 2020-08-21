import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface ThemeState {
   isDark: boolean;
}

export function createInitialState(): ThemeState {
  return {
    isDark: false
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'theme' })
export class ThemeStore extends Store<ThemeState> {

  constructor() {
    super(createInitialState());
  }

}

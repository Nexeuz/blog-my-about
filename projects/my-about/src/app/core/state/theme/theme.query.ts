import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ThemeStore, ThemeState } from './theme.store';

@Injectable({ providedIn: 'root' })
export class ThemeQuery extends Query<ThemeState> {

  constructor(protected store: ThemeStore) {
    super(store);
  }

}

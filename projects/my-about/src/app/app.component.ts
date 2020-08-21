import { Component } from '@angular/core';
import {ThemeService} from './core/state/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-about';
  constructor(public themeService: ThemeService) {
  }
}

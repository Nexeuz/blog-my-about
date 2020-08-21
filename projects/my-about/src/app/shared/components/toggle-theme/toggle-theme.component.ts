import { Component, OnInit } from '@angular/core';
import {ThemeService} from '../../../core/state/theme/theme.service';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent implements OnInit {
  isDark = false;
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleTheme(): void {
    this.themeService.toggleTheme(this.isDark = !this.isDark);
  }
}

import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss']
})
export class ChangeLanguageComponent implements OnInit {
  toggle = true;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  toggleLanguage(): void {
    if (this.toggle) {
      this.translate.use('es');
    } else {
      this.translate.use('en');
    }
    this.toggle = !this.toggle;
  }

}

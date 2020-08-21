import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BtnContactComponent } from './components/btn-contact/btn-contact.component';
import { ToggleThemeComponent } from './components/toggle-theme/toggle-theme.component';
import { ChangeLanguageComponent } from './components/toggle-languaje/change-language.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core';



@NgModule({
  declarations: [HeaderComponent, BtnContactComponent, ToggleThemeComponent, ChangeLanguageComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatRippleModule
    ], exports: [
    HeaderComponent
  ]
})
export class SharedModule { }

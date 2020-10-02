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
import { CarouselComponent } from './components/carousel/carousel.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, BtnContactComponent, ToggleThemeComponent, ChangeLanguageComponent, CarouselComponent, PdfViewerComponent, FooterComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatRippleModule,
    ], exports: [
    HeaderComponent,
    CarouselComponent
  ]
})
export class SharedModule { }

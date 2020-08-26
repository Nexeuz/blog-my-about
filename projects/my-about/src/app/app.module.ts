import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {FormsModule} from '@angular/forms';
import { AboutMeCardComponent } from './components/about-me-card/about-me-card.component';
import {MatCardModule} from '@angular/material/card';
import { AboutMeCardProfileComponent } from './components/about-me-card-profile/about-me-card-profile.component';
import { AboutCarouselComponent } from './components/about-carousel/about-carousel.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AboutCarouselModalComponent } from './components/about-carousel-modal/about-carousel-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ThemeService} from './core/state/theme/theme.service';
import {OverlayContainer} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeCardComponent,
    AboutMeCardProfileComponent,
    AboutCarouselComponent,
    AboutCarouselModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MatSidenavModule,
    SharedModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(theme: ThemeService, overlayContainer: OverlayContainer) {
    theme.theme$
      .subscribe(it => {
        if (it) {
          overlayContainer.getContainerElement().classList.add('dark-theme');
        } else {
          overlayContainer.getContainerElement().classList.remove('dark-theme');
        }
      });
  }
}

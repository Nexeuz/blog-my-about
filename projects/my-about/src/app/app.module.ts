import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SharedModule} from './shared/shared.module';
import {CoreModule, FirestoreTranslationsLoaderFactory} from './core/core.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import { AboutMeCardComponent } from './components/about-me-card/about-me-card.component';
import {MatCardModule} from '@angular/material/card';
import { AboutMeCardProfileComponent } from './components/about-me-card-profile/about-me-card-profile.component';
import { AboutCarouselComponent } from './components/about-carousel/about-carousel.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeCardComponent,
    AboutMeCardProfileComponent,
    AboutCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader, useFactory: FirestoreTranslationsLoaderFactory, deps: [AngularFirestore]
      },
    }),
    CoreModule,
    MatSidenavModule,
    SharedModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }

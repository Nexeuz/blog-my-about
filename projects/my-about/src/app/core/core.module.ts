import { NgModule } from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {FirestoreTranslateLoader} from './class/firestore-translate-loader';
import {environment} from '@environment';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AkitaNgRouterStoreModule} from '@datorama/akita-ng-router-store';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {AngularFireModule} from '@angular/fire';
import {ServiceWorkerModule} from '@angular/service-worker';
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service';

export function FirestoreTranslationsLoaderFactory(db: AngularFirestore): FirestoreTranslateLoader {
  return new FirestoreTranslateLoader(db);
}

@NgModule({
  declarations: [],
  imports: [
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
    })
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}]
})
export class CoreModule { }

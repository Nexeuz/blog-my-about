import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FirestoreTranslateLoader} from './class/firestore-translate-loader';

export function FirestoreTranslationsLoaderFactory(db: AngularFirestore): FirestoreTranslateLoader {
  return new FirestoreTranslateLoader(db);
}

@NgModule({
  declarations: [],
  imports: [

  ]
})
export class CoreModule { }

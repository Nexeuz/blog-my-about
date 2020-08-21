import {TranslateLoader} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

export class FirestoreTranslateLoader implements TranslateLoader{

  constructor(private db: AngularFirestore, private prefix = 'translations') {
  }

  getTranslation(lang: string): Observable<any> {
    return this.db.doc<any>(`${this.prefix}/${lang}`).valueChanges();
  }
}

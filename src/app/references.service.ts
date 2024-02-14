// references.service.ts

import { Injectable } from '@angular/core';
import { References } from './references.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {
  private references: References[] = [];
  private referencesSubject = new BehaviorSubject<References[]>([]);

  get references$() {
    return this.referencesSubject.asObservable();
  }

  addReference(reference: References) {
    this.references.push(reference);
    this.referencesSubject.next([...this.references]);
  }
}

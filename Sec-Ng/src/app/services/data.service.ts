import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = new BehaviorSubject<Person[]>([]);
  readonly data$ = this.data.asObservable();

  addItem(item: Person) {
    const current = this.data.getValue();
    this.data.next([...current, item]);
  }

  clear() {
    this.data.next([]);
  }
}

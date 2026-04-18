import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<any[]>([
    { id: 1, name: 'Mohamed', age: 24, email: 'mohamed@mail.com' },
    { id: 2, name: 'Ali', age: 22, email: 'ali@mail.com' },
  ]);

  data$ = this.dataSubject.asObservable();

  addItem(item: any) {
    const current = this.dataSubject.value;
    this.dataSubject.next([...current, item]);
  }
}
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  data$ = this.dataService.data$;

  newName = '';
  newAge!: number;
  newEmail = '';

  constructor(private dataService: DataService) {}

  add() {
    if (!this.newName || !this.newAge || !this.newEmail) return;

    this.dataService.addItem({
      id: Date.now(),
      name: this.newName,
      age: this.newAge,
      email: this.newEmail,
    });

    this.newName = '';
    this.newAge = 0;
    this.newEmail = '';
  }
    // <-- new method calling clear()
  clearAll() {
    this.dataService.clear();
  }
}
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() valueChange = new EventEmitter<string>();

  onInput(value: string) {
    this.valueChange.emit(value);
  }
}

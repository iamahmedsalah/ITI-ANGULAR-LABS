import { Component, Output } from '@angular/core';

import { DataService } from '../services/data.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  data$ = this.dataService.data$;

  constructor(private dataService: DataService) {}
}
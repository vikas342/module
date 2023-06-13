import { Component } from '@angular/core';

@Component({
  selector: 'app-clac',
  templateUrl: './clac.component.html',
  styleUrls: ['./clac.component.css'],
})
export class ClacComponent {
  constructor() {}

  x: any;
  result: any;

  toArray() {
    this.result = Object.entries(this.x);
  }
}

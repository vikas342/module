import { Component } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {

  n1!: number;
  n2!: number;
  result!: number;

  operations!: string;

  mycalc() {
    if (this.operations == 'Add') {
      this.result = this.n1 + this.n2;
    }
    if (this.operations == 'Sub') {
      this.result = this.n1 - this.n2;
    }
    if (this.operations == 'Div') {
      this.result = this.n1 / this.n2;
    }
    if (this.operations == 'Mul') {
      this.result = this.n1 * this.n2;
    }
  }
}

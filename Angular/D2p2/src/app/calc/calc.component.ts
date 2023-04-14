import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
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

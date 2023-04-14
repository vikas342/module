import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  radius!:number;
  result!:number;

  myfunc(){

    this.result= 3.14 * Math.pow(this.radius,2);
  }

}

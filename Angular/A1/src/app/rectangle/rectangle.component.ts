import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  // ! means can have null values
  L!:number;
  B!:number;


  myfunc(){
    alert(`Area is: ${this.L * this.B}`)
  }


}

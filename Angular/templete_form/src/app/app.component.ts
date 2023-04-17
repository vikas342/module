import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'template_driver_form';

  arr:Array<object>=[];
  onsubmit(x:NgForm ){
    this.arr.push(x.value)
    console.log(this.arr);
    x.reset();
  }
}

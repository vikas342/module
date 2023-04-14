import { Component } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent {
  name:string='';

  myfunc(){

    return `Hello ${this.name}`
  }

}

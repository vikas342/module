import { Component } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {
  name:string='';

  myfunc(){

    return `Hello ${this.name}`
  }

}

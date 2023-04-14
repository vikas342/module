import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pracice2';
  name:string='';

  myfunc(){
    alert(`Hello ${this.name}`)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A2';


  Username:string='';
  Password:string='';
  result:string='';


  myfunc(){
   
    //alert(`Username is ${this.Username} and Password is ${this.Password}`);
    this.result=`Username is ${this.Username} and Password is ${this.Password}`;

  }
}

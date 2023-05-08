import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'in_Out';

  val1!:number;
  send!:number;

  myfunc(){
    console.log(this.val1)
    this.send=this.val1

  }

  recievedmessage($event:string){
    console.log($event)
  }
}

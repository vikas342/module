import { Component } from '@angular/core';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component {
  name:string='';
  pan:string='';
  address:string='';
  
  result!:string;
  myfunc(){
    this.result =this.name+" "+this.pan+" "+this.pan
  }
  
}

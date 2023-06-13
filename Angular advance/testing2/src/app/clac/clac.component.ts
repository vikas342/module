import { Component } from '@angular/core';

@Component({
  selector: 'app-clac',
  templateUrl: './clac.component.html',
  styleUrls: ['./clac.component.css']
})
export class ClacComponent {



age!:number;
result:number=0;



  calculate(){
    if(this.age>0){

      this.result=this.age*365;
    }
    else{
      alert("age cant be in negative")
    }
  }

}

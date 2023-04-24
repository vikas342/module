import { Component } from '@angular/core';
import { Service1Service } from '../services/service1.service';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers: [Service1Service]
})
export class Comp1Component {

  constructor(private sev1:Service1Service){
   

  }
  data:number[]=this.sev1.arr;

  myfunc_(){
    this.sev1.myfunc();
  }

}

import { Injectable } from '@angular/core';
import { student_type } from './student_interface';

@Injectable({
  providedIn: 'root'
})
export class SServiceService {

  constructor() { }

  data:Array<student_type>=[];

  datapush(obj:student_type){
    console.log("service called");
    this.data.push(obj);
  }
  datashow(){
    console.log("service called");
    // console.log(this.data);

    return this.data;
  }
  deldata(id:number){
    this.data.splice(id,1);
  }
}

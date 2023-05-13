import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { student } from '../type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  studentdata:Array<student>=[];

  finddata:Array<student>=[];

p:number=1;
  serch_val:string='';
  serch(){


    this.finddata.pop();
    console.log(this.serch_val)

  let x:any =this.studentdata.find((X)=>{
      return X.Fullname.Firstname.toLowerCase() == this.serch_val.toLowerCase()
    })

    this.finddata.push(x)
    console.log(this.finddata)


  }

  constructor(private serv:ServiceService){

    this.studentdata=serv.studentdata;
    console.log(this.studentdata)
  }



}

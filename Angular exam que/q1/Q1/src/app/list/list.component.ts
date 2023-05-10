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

  constructor(private serv:ServiceService){

    this.studentdata=serv.studentdata;
    console.log(this.studentdata)
  }



}

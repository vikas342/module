import { Injectable } from '@angular/core';
import { QuestionBase } from '../model/Question';
import { TextboxQuestion } from '../model/textmodel';
import { of } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  uname!:string;
  constructor( private dataserv:DataService) {
    this.uname = this.dataserv.getloggedin_userdetails().uname;
   // alert(this.uname)


   }

  getcontrollers(){
    const data:QuestionBase<string>[]=[

      new TextboxQuestion({
        key:'name',
        required:true,
        


        value:this.uname,
        label:'uname',
         order:1
      }),

      new TextboxQuestion({
        key:'caption',
        required:true,

        label:'caption',
         order:2
      }),
      new TextboxQuestion({
        key:'imageurl',

        required:true,
        label:'Image',
         order:3
      }),
    ]
    return of(data.sort((a,b)=>a.order-b.order));

  }
}

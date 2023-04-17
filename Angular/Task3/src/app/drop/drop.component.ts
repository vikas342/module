import { Component } from '@angular/core';
import { students } from '../studentss';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent {
  students:Array<students>=[{"StudentID":1,"StudentName":"Rahul"},

  {"StudentID":2,"StudentName":"Rita"},
  
  {"StudentID":3,"StudentName":"Rohan"}
  
  ]

student_id!:number;

  myfunc(){
    console.log(this.student_id)
  }
}

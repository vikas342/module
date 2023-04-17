import { Component } from '@angular/core';
import { student } from '../student';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {

  studentlist:Array<student>=[{
    ID :1,
    Name:'vikas',
    Age : 21,
    Average :81,
    Grade:'B',
    Active:true
  },
  {
    ID :2,
    Name:'vinit',
    Age : 22,
    Average :89,
    Grade:'A',
    Active:true
  },
  {
    ID :3,
    Name:'preet',
    Age : 21,
    Average :75,
    Grade:'C',
    Active:false
  },
  {
    ID :4,
    Name:'ronny',
    Age : 23,
    Average :56,
    Grade:'D',
    Active:false
  }
]

}




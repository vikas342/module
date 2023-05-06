import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ansArr, questions } from '../type';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent implements OnInit {
  ansArr: ansArr[] = [];
  data: questions[] = [];
  index: number = 1;

  userans: string = '';
  min=10;
   totalsec=60;
 sec=60;


  constructor(private serv: ServiceService) {}

  ngOnInit() {






    this.data = this.serv.questions;
    console.log(this.data);

  }


  nextquestion() {
    if (this.index > this.data.length) {
      this.ansArr.pop();
      this.ansArr.pop();

      this.index = 1;
    } else {
      console.log(this.index);
      this.pusdhdata(this.index);
      this.index++;
      console.log(this.ansArr);
    }
    //console.log(this.userans);
  }

  pusdhdata(x: number) {
    this.ansArr.push({
      id: x,
      userans: this.userans,
    });
  }
}
function calculateTime() {
  throw new Error('Function not implemented.');
}

function startTimer() {
  throw new Error('Function not implemented.');
}


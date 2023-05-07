import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ansArr, questions } from '../type';
import { Router } from '@angular/router';



@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent implements OnInit {
  ansArr: ansArr[] = [];
  data: questions[] = [];
  index: number = 1;
  score:number=0;

  userans: string = '';
  min=1;
 sec=0;
 interval_var:any;
 duration!:any;



  constructor(private serv: ServiceService,private rt:Router) {}

  ngOnInit() {






    this.data = this.serv.questions;
    console.log(this.data);

    this.mytimer();

  }

  mytimer(){
    this.interval_var=setInterval(()=>{this.timer()},1000)
  }

  timer(){

    this.duration=this.min+":"+this.sec
    this.sec--;
    if(this.sec<0){
      this.sec=60;
      this.min--;
    }
    if(this.min==0 && this.sec<=0){
      clearInterval(this.interval_var);

      this.clacResult();



    }


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
    this.userans='';
  }

  clacResult(){
    alert("Exam is over");

    this.rt.navigateByUrl('/result');

    for (let i = 0; i < this.ansArr.length; i++) {

      if(
        this.ansArr[i].userans==this.data[i].ans
      )
      {
        this.score++;
      }




    }

    this.serv.score=this.score;
    console.log(this.score);
  }
}



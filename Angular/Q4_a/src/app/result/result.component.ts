import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {


  constructor(private serv:ServiceService){}

  score:number=this.serv.score;
  outof:number=this.serv.questions.length;


}

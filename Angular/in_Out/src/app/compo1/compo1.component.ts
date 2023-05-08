import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {

  @Input() data!:number;


  @Output() messageevent= new EventEmitter<string>();

  child_message:string='from child';


  sendmessage(){

   this.messageevent.emit(this.child_message);
  }
}

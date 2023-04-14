import { Component,Input } from '@angular/core';
import { details } from '../details';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  
  @Input() data!:Array<details>
  Pdetails:Array<details>=[];

  
  myfunc2(data:details){
    this.Pdetails.shift();
    console.log(`${data.Brand} ,${data.Model} ,${data.Price},${data.Image}`);
    this.Pdetails.push({
      Brand: data.Brand,
      Model: data.Model,
      Image: data.Image,
      Price: data.Price
    })
  
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
name:string='';
pan:string='';
address:string='';

result!:string;
myfunc(){
  this.result =this.name+" "+this.pan+" "+this.pan
}

}

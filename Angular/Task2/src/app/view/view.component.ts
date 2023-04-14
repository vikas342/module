import { Component,Input } from '@angular/core';
import { details } from '../details';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
@Input() data!:Array<details>


}

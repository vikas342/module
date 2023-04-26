import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  post=[
    {
      id:1,
      name:'vikas'
    },
    {
      id:2,
      name:'vinit'
    },
    {
      id:3,
      name:'preet'
    }
  ]

}

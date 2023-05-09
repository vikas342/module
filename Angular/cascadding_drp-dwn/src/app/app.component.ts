import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cascadding_drp-dwn';


  y:Array<any>=[];
  state:string='';


  x=['gj','rj','mh','up'];
  st:Array<any>=[
    {
      state:'gj',
      city:['ahd','vadodra']
    },
    {
      state:'mh',
      city:['pune','mumbai']
    }
  ]

  clickme(){
   // console.log(this.state);

   let  z=this.st.filter((x)=>{
      return x.state==this.state

    })
    console.log(z);

    this.y=z
    console.log(this.y);
  }

  ngOnInit(): void {

  }
}

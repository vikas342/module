import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-lising',
  templateUrl: './lising.component.html',
  styleUrls: ['./lising.component.css']
})
export class LisingComponent implements OnInit {
  data!:any[];

  constructor(private api:ApiService){




  }

  ngOnInit(): void {

    this.api.getlisting().subscribe((x)=>{
      console.log(x)
      this.data=x;
    })


  }









}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {

  // x:any[]=[];
  data:any;

  constructor(private dataserv:DataService) {


  }


  ngOnInit(): void {
    // this.data= this.dataserv.data;
    // console.warn(this.data);
    // this.x.push(this.data)

    this.data=this.dataserv.getdata();

  }
}

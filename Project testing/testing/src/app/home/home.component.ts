import { Component, OnInit } from '@angular/core';
import { SeviceService } from './sevice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private serv:SeviceService){}

  data: any[] = [];



  ngOnInit(): void {
    this.serv.getdata().subscribe((x) => {
      this.data = x;
      console.log(this.data);
    });

  }
}

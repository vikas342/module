import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { filter } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],


})
export class HomeComponent implements OnInit {
  constructor(private serv: ServiceService) {}

  data: Array<any> = [];

  details: Array<any> = [];


   moviedetail:Array<any>=[];


  selected!: string;

  fun(a: string) {
    this.selected = a;
    // console.log(this.selected);
    this.fetchdata();
  }

  fetchdata() {
    // console.log(this.details);

  let z =
   this.details.filter((obj) => {
      return obj.MovieName == this.selected;
    });

    this.moviedetail=z;

   console.log(this.moviedetail)
  }

  ngOnInit(): void {
    this.serv.dropDwndata().subscribe((x) => {
      this.data = x;
    });

    this.serv.getdata().subscribe((y) => {
      this.details = y;
    });




 }
}

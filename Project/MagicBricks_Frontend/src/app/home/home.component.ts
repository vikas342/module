import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  otheruserlistings:any[]=[];

  constructor(private apiserv:ApiService){

  }
ngOnInit(): void {
  this.apiserv.getotheruserlisting().subscribe(res=>{
    this.otheruserlistings=res;})

}


}

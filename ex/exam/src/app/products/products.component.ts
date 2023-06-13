import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(private api:ApiService){

  }
  data:any=[];
ngOnInit(): void {

  this.api.getallposts().subscribe(x=>this.data=x)
}



}

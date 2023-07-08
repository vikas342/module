import { AddProductAction, AddProductActionSuccess } from './Store/product.action';
import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectproducts } from './Store/product.selecter';
import { GetProductActionSuccess,GetProductAction } from 'src/app/Store/product.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Assignment8';
  constructor(private store:Store){}
  ngOnInit(): void {
   var x= this.store.dispatch(GetProductAction())
   console.warn(x);
  }
  onAdd(data:any){
    console.log(data);
    this.store.dispatch(AddProductActionSuccess({product:data}))
  }

  products$ = this.store.select(selectproducts)

}

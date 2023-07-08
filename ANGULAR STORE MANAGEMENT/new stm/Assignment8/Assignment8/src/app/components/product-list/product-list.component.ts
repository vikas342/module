import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { ProductService } from 'src/app/product.service';
import { Store } from '@ngrx/store';

import { products } from 'src/app/model';
import { DeleteProduct } from 'src/app/Store/product.action';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private store:Store){}

  @Input() products: ReadonlyArray<products> = [];




  // ngOnInit(): void {
  //   this.productService.getall().subscribe(
  //     products => this.store.dispatch(GetProductActionSuccess({products}))
  //   )


  // }
  onDelete(id:number){
    this.store.dispatch(DeleteProduct({id}))
  }


}

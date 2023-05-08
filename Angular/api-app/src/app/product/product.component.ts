import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any = []

  constructor(private productService : ProductService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
       (products) => {
        this.products = products;
        console.log(this.products);
      },
    );
  }
}

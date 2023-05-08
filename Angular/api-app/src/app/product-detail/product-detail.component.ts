import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor(private productService: ProductService,private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    // this.getProductDetail();
    var productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(productId).subscribe(
     (res) => {
        this.product = res;
        console.log(this.product);
      }
    )
  }


  // getProductDetail() {
  //   var productId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.productService.getProduct(productId).subscribe(
  //    (res) => {
  //       this.product = res;
  //       console.log(this.product);
  //     }
  //   )
  // }
}

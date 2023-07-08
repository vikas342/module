import { products } from './../../model';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {


  ProductForm = new FormGroup({
    name:new FormControl(''),
    price:new FormControl(0),
    discount: new FormControl(0),
    description: new FormControl(''),
    image_URL: new FormControl('')
  })

  @Output() add = new EventEmitter<any>();

}

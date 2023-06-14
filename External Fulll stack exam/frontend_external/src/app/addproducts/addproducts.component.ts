import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css'],
})
export class AddproductsComponent implements OnInit {
  addproduct!: FormGroup;

  categories!: any;
  subcategories!: any;

  constructor(private api: ApiService, private fb: FormBuilder) {}

  getsubcat(catid: any) {
    let id =parseInt(catid.value);


    this.api.getsubcategories(id).subscribe((x) => {
      console.log(x);
      this.subcategories = x;
    });
  }

  ngOnInit(): void {
    this.api.getcategories().subscribe((x) => {
      console.log(x);
      this.categories = x;
    });

    this.addproduct = this.fb.group({
      Pname: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      Price: ['', [Validators.required,
        Validators.pattern('^[0-9]+$'),

        ]],
      Qty: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Photo: ['', [Validators.required]],
      cat: ['', [Validators.required]],

      subcat: ['', [Validators.required]],
    });
  }



  get Pname(){
    return this.addproduct.get("Pname")
  }
  get description(){
    return this.addproduct.get("description")
  }
  get Qty(){
    return this.addproduct.get("Qty")
  }
  get Photo(){
    return this.addproduct.get("Photo")
  }
  get Price(){
    return this.addproduct.get("Price")
  }

  get cat(){
    return this.addproduct.get("cat")
  }
  get subcat(){
    return this.addproduct.get("subcat")
  }









  submit() {
    console.log(this.addproduct.value);
    this.api.postProduct(this.addproduct.value).subscribe((x)=>{

      console.log(x);
      alert("product posted");

    },
(Error)=>{

}
    )
  }
}

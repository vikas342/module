import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css'],
})
export class ProductviewComponent implements OnInit {

  product:string='';


  productlist!: any;


  filteredproductlist!: any;



  categories!:any;

  filterevent:boolean=false;

  editproduct!: any;

  editform!: any;
filterproduct: any;

  constructor(private api: ApiService, private fb: FormBuilder,private route:Router) {}

  ngOnInit(): void {
    this.api.getlist().subscribe((x) => {
      console.log(x);
      this.productlist = x;
    });

    this.editform = this.fb.group({
      pid: ['', [Validators.required]],
      Pname: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      Price: ['', [Validators.required, Validators.pattern('')]],
      Qty: ['', [Validators.required, Validators.pattern('')]],
      Photo: ['NULL', [Validators.required]],
    });



    this.api.getcategories().subscribe((x)=>{
      console.log(x);
      this.categories=x;
    })


  }

  edit(id: number, index: number) {
   // alert(id);
    var data = this.productlist[index];
    console.log(data);

    this.editproduct = data;
    //  console.log(data);

    const formfiller = {
      pid: data.pid,
      Pname: data.pname,
      description: data.description,
      Price: data.price,
      Qty: data.qty,
      Photo: data.photo
    };


    this.editform.patchValue(formfiller);
  }

  delete(id: number) {

    this.api.deleteproduct(id).subscribe((x)=>{
      console.log(x);
      this.api.getlist().subscribe((x) => {
        console.log(x);
        this.productlist = x;
      });

    });




  }

  submiteditform() {
    console.log(this.editform.value);
    this.api.editproduct(this.editform.value).subscribe((x)=>{
console.log(x);
      this.productlist=x;

    })

    this.api.getlist().subscribe((x) => {
      console.log(x);
      this.productlist = x;
    });
  }






  serchproduct(){


this.filterevent=false;
  this.filteredproductlist=this.productlist.filter((x: { pname: string; })=> x.pname== this.product);

    console.log(this.filteredproductlist);

  }




  getfilter(data:any){
    this.filterevent=true;

    this.filteredproductlist=this.productlist.filter((x: { cat: number; })=> x.cat== parseInt(data.value));

    console.log(this.filteredproductlist);
  }
}

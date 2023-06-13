import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  Addproduct!:FormGroup;

  cat:any=[];
  subcat:any=[];

  constructor(private fb:FormBuilder ,private api:ApiService){}

  ngOnInit(): void {




    this.Addproduct=this.fb.group({
      product_name:['',[Validators.required,Validators.maxLength(50)]],
      Category:['',[Validators.required,Validators.maxLength(50)]],
      Subcategory:['',[Validators.required,Validators.maxLength(50)]],




      Decription:['',[Validators.required,Validators.maxLength(50)]],

      price:['',[Validators.required,Validators.min(1),Validators.pattern("[1-9]\d*|0\d+")]],

      Qty:['',[Validators.required,Validators.min(1),Validators.pattern("[1-9]\d*|0\d+")]],
      photo:['',[Validators.required]],



    })


    this.api.getsubcat().subscribe((x)=>this.subcat=x)


    this.api.getcat().subscribe((x)=> this.cat=x
    )






  }



  onSubmit(){

    console.log(this.Addproduct.value)

    this.api.postproduct(this.Addproduct.value).subscribe(x=>{
      console.log(x)
      console.log("posted");
    })
  }




}

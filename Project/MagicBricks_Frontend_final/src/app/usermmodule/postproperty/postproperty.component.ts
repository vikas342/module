import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-postproperty',
  templateUrl: './postproperty.component.html',
  styleUrls: ['./postproperty.component.css']
})
export class PostpropertyComponent implements OnInit {



  prop_id!:number;

  add_id!:number;
  owner_id!:number;



  uid!:number;
  ownerdetails!:FormGroup;
  adressdetails!:FormGroup;
  propertydetails!:FormGroup;
  propImages!:FormGroup;
  amenitydetails!:FormGroup;



  ownerdetails_visiblity:boolean=true;
  adressdetails_visiblity:boolean=false;
  propertydetails_visiblity:boolean=false;
  propImages_visiblity:boolean=false;
  amenitydetails_visiblity:boolean=false;




  //api data

  cities!:any[];
  state!:any[];
  propfor!:any[];
  proptype!:any[];
  postedby!:any[];





  constructor(private dataserv:DataService,private api:ApiService,private fb:FormBuilder){


  }


  ngOnInit(): void {



    this.uid=Number(localStorage.getItem('uid'));
    // alert(typeof(this.uid))

    this.ownerdetails=this.fb.group({
      Owner_Id:[this.uid],
      Owner_Name:['',[Validators.required]],
      contact_no:['',[Validators.required]],
      Email:['',[Validators.required,Validators.email]],


    })



    this.adressdetails=this.fb.group({
      Building_Name:['',[Validators.required]],
      Area:['',[Validators.required]],
      State:['',[Validators.required]],
      City:['',[Validators.required]],
      Pincode:['',[Validators.required]]





    })


    this.propertydetails=this.fb.group({
      Owner_details:[this.owner_id],
      Address:[this.add_id],
      PostedBy:['',[Validators.required]],
      Prop_for:['',[Validators.required]],
      Prop_Type:['',[Validators.required]],


      Price:['',[Validators.required]],
      Prop_desc:['',[Validators.required]]





    })




    this.api.getcities().subscribe((x)=>{
      this.cities=x;
    })

    this.api.getstates().subscribe((x)=>{
      this.state=x;
    })


    this.api.getprop_for().subscribe((x)=>{
      this.propfor=x;
    })

    this.api.getprop_postedby().subscribe((x)=>{
      this.postedby=x;
    })

    this.api.getproptype().subscribe((x)=>{
      this.proptype=x;
    })


  }




  ownerdetails_Submit(){
    console.log(this.ownerdetails.value)
    this.ownerdetails_visiblity=false
  this.adressdetails_visiblity=true;

  }


  adressdetails_Submit(){
    console.log(this.adressdetails.value)
    this.adressdetails_visiblity=false;
    this.propertydetails_visiblity=true;
  }


  propertydetails_Submit(){
    console.log(this.propertydetails.value)
    this.propertydetails_visiblity=false;
  }
}

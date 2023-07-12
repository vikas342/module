import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-editprop',
  templateUrl: './editprop.component.html',
  styleUrls: ['./editprop.component.css']
})
export class EditpropComponent implements OnInit {


  //db id
  ownerdetails_id:any;
  addressdetails_id:any;
  propertydetails_id:any;




  //api data
  owner_details:any;
  address_details:any;
  property_details:any;





  prop_details:any;
  pid!:number;
  uid!:number;
  constructor(private api:ApiService,private dataserv:DataService) { }

  ngOnInit() {

  //  this.pid= Number(localStorage.getItem('editPropId'))
  this.pid= Number(localStorage.getItem('pid'))
  this.propertydetails_id= Number(localStorage.getItem('pid'))



   this.uid=Number(localStorage.getItem('uid'))

  // console.log(this.pid);


   this.api.getprop_byId(this.pid).subscribe((x)=>{
    this.prop_details=this.dataserv.dataparser(x);
    console.log(this.prop_details);
  })

  this.api.edit_ownerdetails(this.uid,this.pid).subscribe((x)=>{



    // this.owner_details=x;
    // this.ownerdetails_id=this.owner_details[0].ownwerDetails_id
     this.ownerdetails_id=x


  })


  this.api.edit_addressdetails(this.pid).subscribe((x)=>{

   // console.log(x)

    // this.address_details=x;
    // this.addressdetails_id=this.address_details[0].addressDetails_Id
     this.addressdetails_id=x


  })



  // this.api.edit_Propertydetails(this.pid).subscribe((x)=>{

  //   this.property_details=x;
  //   this.propertydetails_id=this.property_details[0].propDetails_id

  // })


  }

}

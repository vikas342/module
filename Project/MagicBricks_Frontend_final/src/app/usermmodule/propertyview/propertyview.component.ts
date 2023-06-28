import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-propertyview',
  templateUrl: './propertyview.component.html',
  styleUrls: ['./propertyview.component.css']
})
export class PropertyviewComponent implements OnInit {
  city!:string;
  pid!:number;

  getdeatils!:FormGroup;

  prop_details!:any[];
  constructor(private dataserv:DataService,private api:ApiService,private fb:FormBuilder){

  }

ngOnInit(): void {
    this.pid=this.dataserv.getpid();

    //alert(typeof(this.pid))

    this.api.getprop_byId(this.pid).subscribe((x)=>{
      this.prop_details=this.dataserv.dataparser(x);
    })



    this.getdeatils=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.email,Validators.required]],
      phone:['',[Validators.required]],

    })





}


getdetails_form(){
 // console.log(this.getdeatils.value)
  var data=this.getdeatils.value;
  var name=data.name
  var email=data.email
  var phone=data.phone

  alert(name+ " "+email+" "+phone);
}



}

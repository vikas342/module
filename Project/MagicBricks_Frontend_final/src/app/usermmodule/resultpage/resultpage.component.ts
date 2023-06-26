import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {

  // x:any[]=[];
  data:any;


  //filters

  propfor!:string;
  proptype!:string;
  selectedcity!:string;
  postedby!:string;
  min:number=0;
  max!:number;



  cities: any[] = [];
  prop_type: any[] = [];
  prop_for: any[] = [];

  prop_postedby: any[] = [];






  constructor(private dataserv:DataService,private route:Router,private api:ApiService) {


  }


  ngOnInit(): void {
    // this.data= this.dataserv.data;
    // console.warn(this.data);
    // this.x.push(this.data)
    this.api.getcities().subscribe((x) => {
      this.cities = x;
      console.log(this.cities);
    });

    this.data=this.dataserv.getdata();


    this.api.getproptype().subscribe((x)=>{
      this.prop_type=x;
    })

  }


  arr:number[]=[]

  putinwhishlist(pid:number){
   //alert(pid)
   if(this.arr.includes(pid)){
   let x= this.arr.findIndex(x=> x==pid)
   this.arr.splice(x,1)
   }

   else{

     this.arr.push(pid)
    }
  }



  propview(pid:number){

   // console.log("object");
    this.dataserv.setpid(pid)
this.route.navigateByUrl('/propertyview')
 }


 //willl used for setting city in below components
 selectcity(city: string) {
  this.selectedcity = city;
  alert(city + ' city is selcted');

}


}

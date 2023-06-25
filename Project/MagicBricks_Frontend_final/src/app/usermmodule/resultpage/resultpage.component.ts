import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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





  constructor(private dataserv:DataService,private route:Router) {


  }


  ngOnInit(): void {
    // this.data= this.dataserv.data;
    // console.warn(this.data);
    // this.x.push(this.data)

    this.data=this.dataserv.getdata();



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
}

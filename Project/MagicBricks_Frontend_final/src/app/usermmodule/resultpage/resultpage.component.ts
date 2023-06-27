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


  //
  selectedcity: any ;

  // x:any[]=[];
  data:any;
  tempdata:any;


  //filters

  city!:string;
  propfor!:string;
  proptype!:string;

  postedby!:string;
  min!:number;
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


    this.api.getprop_for().subscribe((x)=>{
      this.prop_for=x;
    })


    this.api.getprop_postedby().subscribe((x)=>{
      this.prop_postedby=x;
    })


    this.selectedcity=this.dataserv.getSelctedCity()
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
//  selectcity(city: string) {
//   this.selectedcity = city;
//   alert(city + ' city is selcted');

// }




//get filter button
getfilter(){
  //alert(this.city+" "+this.propfor+" " +this.proptype+" " +this.min +" "+this.max)


  this.dataserv.setcity(this.city);
  this.api.getpropserch_CTFMinMax(this.city,this.proptype,this.propfor,this.min,this.max).subscribe((x)=>{

    this.data=this.dataserv.dataparser(x);

  })

}


//select city from below navbar

selectcity_serch(x:any){
  alert(x)

  this.api.getprop_serchcity(x).subscribe((x)=>{

this.data=this.dataserv.dataparser(x)

    console.warn(this.data);

  this.tempdata=this.data;

  })

  this.selectedcity=x;

}

selectpropfor_serch(x1:any){
  alert(x1.value)
if(x1.value != ''){

  this.data=this.tempdata;
  this.data=this.data.filter((x:any)=> x.propertyFor==x1.value)
}
}

selectproptype_serch(x:any){
  alert(x.value)
if(x.value != ''){

  this.data=this.tempdata;

  this.data=this.data.filter((z:any)=> z.propertyType==x.value)
}

}


selectPropPostedBy_serch(x:any){
  alert(x.value)

if(x.value != ''){

  this.data=this.tempdata;

  this.data=this.data.filter((z:any)=> z.postedBy==x.value)
}
}



//onclick bufget button
selectBudget_serch()
{
  alert(this.min+" "+this.max)

if(this.min !=undefined && this.max !=undefined){

  this.data=this.tempdata;

  this.data=this.data.filter((z:any)=> (z.price >= this.min && z.price<=this.max))
}
}



//sorting

sorting(x:any){
  alert(x.value)
  if(x.value=='lth'){


  this.data=this.data.sort((a: any, b: any) => a.price - b.price);
  }
  if(x.value=='htl'){



  this.data=this.data.sort((a: any, b: any) => b.price - a.price);

  }


}

}

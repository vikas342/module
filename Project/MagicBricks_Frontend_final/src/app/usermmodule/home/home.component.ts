import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //serch

  city:any='Ahmedabad';
  type:string="Flat";
  min:number=0;
  max:number=5000000;

  propfor:string="Sell";


  //serch





  otheruserlistings!: any[];
  data: any = [];

  cities:any=[];
  types:any=[];

  constructor(private apiserv: ApiService,private route:Router,private dataservice:DataService) {}
  ngOnInit(): void {



    this.apiserv.getotheruserlisting().subscribe((res) => {
      this.otheruserlistings = res;

      for (let i of this.otheruserlistings) {
        if (i.imageUrl) {
          let x = JSON.parse(i.imageUrl);

          i.imageUrl = x;
        }
        if (i.prop_amenities) {
          let x = JSON.parse(i.prop_amenities);

          i.prop_amenities = x;
        }
      }
    });


    this.apiserv.getcities().subscribe((x)=>{
      this.cities=x;
    })


    this.apiserv.getproptype().subscribe((x)=>{
      this.types=x
      console.log(x);
    })


  }


  serch(){
    alert(this.city+" "+this.type +"  "+this.propfor+ "  "+this.min+"  " +this.max)

    this.dataservice.setcity(this.city);
    this.apiserv.getpropserch_CTFMinMax(this.city,this.type,this.propfor,this.min,this.max).subscribe((x)=>{

      this.dataservice.putdata(x);
      this.route.navigateByUrl('\serchresult')
    })

  }


  setpropfor(x:string){

    this.propfor=x
    if(x=='Rent'){
      this.max=25000
    }

  }
}

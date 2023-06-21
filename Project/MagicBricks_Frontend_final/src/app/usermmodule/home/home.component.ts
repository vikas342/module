import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


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
  max:number=500000;

  propfor:string="Buy";


  //serch





  otheruserlistings!: any[];
  data: any = [];

  cities:any=[];
  types:any=[];

  constructor(private apiserv: ApiService) {}
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
    alert(this.city +"  "+this.type+ "  "+this.min+"  " +this.max+" "+this.propfor)
  }


  setpropfor(x:string){

    this.propfor=x

  }
}

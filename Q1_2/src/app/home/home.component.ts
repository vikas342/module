import { Component, OnInit } from '@angular/core';
import { datatype } from '../Data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  inIndex!:number;
  rows:Array<datatype>=[];
  total!:number;

  inTime:string="";
  outTime:string="";
  Carnumber:string="";
  allocated!: boolean;

ngOnInit(): void {


  for (let i=1;i<=20;i++) {
    this.rows.push({
      id: i,
      inTime:"",
      outTime:"",
      Carnumber:"",
      allocated: false
    })
  }

  console.log(this.rows);



}


cost(){
  let x=this.rows.find((z)=>{
    return z.id==this.inIndex;
  });
  let h1=Number((x?.inTime)?.substring(0,2));
  let h2=Number((x?.outTime)?.substring(0,2));



  console.log(typeof(h1));

  console.log(h1);

  console.log(h2);


  // console.log(typeof(Number(h1)));
  let diff=h2-h1;

  console.log(diff);

  if( diff <=2){

    this.total=20;
  }
  if(diff >2 && diff<=4){
    this.total=40;

  }

  if(diff >4 && diff<=6){
    this.total=100;

  }
  if(diff >6 && diff<=8){
    this.total=200;

  }







}



passId(id: number){
  this.inIndex = id;
  console.log(this.inIndex);

}

onSubmit(){
  this.rows[this.inIndex - 1 ].Carnumber = this.Carnumber
  this.rows[this.inIndex - 1 ].inTime = this.inTime
  this.rows[this.inIndex - 1 ].outTime = this.outTime
  this.rows[this.inIndex - 1 ].allocated = true

  // this.cost();

  console.log(this.rows)


  this.inTime="";
  this.outTime="";
  this.Carnumber="";
  this.allocated=false;
  this.total=0;




}




onpay(){
  this.rows[this.inIndex - 1 ].Carnumber = "";
  this.rows[this.inIndex - 1 ].inTime = "";
  this.rows[this.inIndex - 1 ].outTime = "";
  this.rows[this.inIndex - 1 ].allocated = false;

}






}

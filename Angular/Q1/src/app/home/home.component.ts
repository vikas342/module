import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { data } from '../data_interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serv:ServiceService){}

  Sel_seat_number:number[]=[];
   booked:any[]=[2,3,5,12,14,17,20,22,25,33,36,38,42,44]

  data:data[]=[];
  ngOnInit(): void {
   this.serv.getdata().subscribe(
      (p) =>{
        this.data=p;
        console.log(this.data)

      }
    )

    // this.totalseating();


 console.log(this.booked)

  }



  checkboked(x:number){
    return this.booked.includes(x)

  }

  checkselected(x:number){


    return this.Sel_seat_number.includes(x)
  }
  selectedSeat(i:number){

    if(this.Sel_seat_number.includes(i)){
      // this.Sel_seat_number.splice(this.Sel_seat_number.length-1,1);
     for(let x=0;x<this.Sel_seat_number.length;x++){
      if(i==this.Sel_seat_number[x]){
        this.Sel_seat_number.splice(x,1);
      }
     }
    }
    this.Sel_seat_number.push(i)

    console.log(this.Sel_seat_number)


  }

//   seatings:number[]=[];
//    totalseating(){
//     let i=1;
//     for( i=1;i<=45;i++){
//       this.seatings.push(i);
//     }
//     console.log(this.seatings)
//    }


// myfunc(x:number){
//   console.log(x)
// }


// x:number=10

// finalprice=this.totalAmount();

totalAmount(){
  let total:number=0;

  for(let i =0;i<=this.Sel_seat_number.length;i++){


    for(let x of this.data[0].Rows){


    if(this.Sel_seat_number[i] >=x.Start && this.Sel_seat_number[i]<=x.End){

      if(x.row==1){

        total+=300;
      }
      if(x.row==2){

        total+=350;
      }   if(x.row==3){

        total+=400;
      }   if(x.row==4){

        total+=450;
      }
      if(x.row==5){

        total+=500;
      }
      if(x.row==6){

        total+=600;
      }
     }
    }



  }
  return total;

}


booking(){

for(let i of this.Sel_seat_number){

  this.booked.push(i);


}

alert(`You have booked ${this.Sel_seat_number}` )

for(let i=0;i<=this.Sel_seat_number.length;i++){
  this.Sel_seat_number.pop()
}

console.log(this.booked)


}
}

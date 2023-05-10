import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cities, States, datatype, student, users } from './type';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  studentdata:Array<student>=[];

  usertype:string='';

  status:boolean=false;
  constructor(private http: HttpClient) {





   }


  credentials:Array<users>=[];

  data:Array<datatype>=[];

  states:Array<States>=[{
    "StateID": 1,
    "StateName": "Gujarat"
  },
  {
    "StateID": 2,
    "StateName": "Maharashtra"
  },
  {
    "StateID": 3,
    "StateName": "Punjab"
  }];

  cities:Array<Cities>=[];


  getcitiies(){
    for (let i of this.data){
this.cities=i.Cities;
    }
    console.log(this.cities)
    return this.cities;

  }


getstate(){
  // console.log("service")
  for(let i of this.data){
    this.states=i.states
  }
  console.log(this.states)

}




  getcredentials(){

    for(let i of this.data){
     this.credentials=i.users;

    }

    console.log(this.credentials);


  }


  // putdata(){
  //   this.getdata().subscribe(
  //     (x)=>{
  //       this.data=x;



  //     }
  //     )
  // }




  getdata(){

    console.log(this.data)

    return this.http.get<Array<any>>('../assets/data.json');
    }





  }

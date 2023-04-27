
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  user=[{
    name:'vikas',
    password:'vikas01'
  },
  {
    name:'vinit',
    password:'vinit01'
  }
]
status:boolean=false

  constructor() { }

 check(name:string,password:string){
    for (let i of this.user){
      if(i.name==name && i.password==password){
        console.log("valid user")
        this.status=true;
        break;
      }




    }


  }
// isloggedin(){
//   return this.status
// }

}


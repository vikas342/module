import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  constructor(private serv:AuthService,private route:Router ,private api:ApiService){}

  cities:any[]=[];
  types:any[]=[];
  userlogedin:boolean=this.serv.userlogedin;
  selectedcity:string='Ahmedabad';

  logout(){
    this.serv.logout();
  }

  login(){

    this.route.navigateByUrl('/login')
  }



  //willl used for setting city in below components
  func(x:string){

    alert(x);
    this.selectedcity=x;
  }



  //willl be call in service and service will call api in api crete dto for type and city on basis fetch data
  prop(x:string,y:string){
    alert(x+" "+y)
  }

ngOnInit(): void {


  //get city

  this.api.getcities().subscribe((x)=>{
    this.cities=x
    console.log(this.cities);
  })

  this.api.getproptype().subscribe((x)=>{
    this.types=x
    console.log(this.types);
  })

}



propbudget(min:number,max:number){
  alert(min+" "+max)
}

postproplistings(){

}


postprop(){
  
}

}

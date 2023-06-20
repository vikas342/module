import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private serv:AuthService,private route:Router){}

  userlogedin:boolean=this.serv.userlogedin;
  selectedcity:string='';

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

}

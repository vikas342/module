import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { datatype, users } from '../type';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  constructor(private serv:ServiceService,private rt:Router){

  }

  data:Array<datatype>=[];

  credentials:Array<users>=[];


  msg:string='';


  uname:string='';
  pass:string='';
  type:string='';





  logining(){
    this.msg="";

console.log("object");
    for(let x of this.credentials){
      if(x.userName==this.uname && x.password==this.pass)
      {

        this.type=x.role;
        this.serv.usertype=x.role;
        console.log(this.serv.usertype)
        console.log('logged in');

        this.serv.status=true;

        this.uname='';
        this.pass='';

        this.rt.navigateByUrl('home');
        break;


      }
      this.msg="User not found";




    }




  }



  getcredentials(){

    this.serv.data=this.data;

    for(let i of this.data){
     this.credentials=i.users;

    }
    this.serv.credentials=this.credentials;

    // console.log(this.serv.data)
    // console.log(this.serv.getcitiies())
    // console.log(this.serv.states)





  }



  ngOnInit(): void {

    this.serv.getdata().subscribe(
      (x)=>{
        this.data=x;



      }
      )





  }



}


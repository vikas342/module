import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from "@angular/forms";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private serv:AuthService,private route:Router){

  }
  sigin_form!:FormGroup;
  myobj!:Array<object>;
  data:any;



  ngOnInit(): void {

    this.sigin_form=this.fb.group({

      Email:[''],
      Password:['']

    })
  }


  onsubmit(){
    console.log(this.sigin_form.value);
    this.data=this.sigin_form.value;

    this.serv.logindata(this.data).subscribe(x=>{
      console.log(x);
      this.route.navigateByUrl('\home');
    },
    (error)=>{console.log(error);
    alert("Invalid credetials");

    }
    )




  }

}

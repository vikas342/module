import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private fb:FormBuilder,private auth:AuthService,private route:Router){

  }



  login!:FormGroup;

  ngOnInit(): void {

    this.login= this.fb.group({

     Email:['',[Validators.required,Validators.email]],
       Password:['',[Validators.required,Validators.maxLength(8)]],
    })

  }


  submitform(){

    console.log(this.login.value)

    this.auth.login(this.login.value).subscribe(x=>{
      console.log(x);
      console.log("login succefully");
      this.auth.storetoken(x);
      if(this.auth.role=="admin"){
        this.route.navigateByUrl("/adminhome")
      }
      else{
        this.route.navigateByUrl("/userhome")
      }

        })


  }
}

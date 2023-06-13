import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginform!:FormGroup;
  constructor(private auth:AuthService,private fb:FormBuilder,private route:Router){




  }



  ngOnInit(): void {


    this.loginform=this.fb.group({
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.maxLength(8)]]
    })



  }


  submit(){
    console.log(this.loginform.value);

    this.auth.login(this.loginform.value).subscribe((x=>{

      console.log(x);
      this.auth.savetoken(x);

      if(this.auth.role=="admin"){
        this.route.navigateByUrl("/adminhome")

      }
      else{
        this.route.navigateByUrl("/userhome")

      }

    }),
    (Error)=>{

    }
    )
  }

}

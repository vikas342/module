import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signup!:FormGroup;



  constructor(private fb:FormBuilder,private dataserv:DataService,private  router:Router) {


  }


  ngOnInit(): void {

    this.signup=this.fb.group({
      email:['',[Validators.email,Validators.required]],
      uname:['',[Validators.maxLength(8),Validators.required]],
      password:['',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]]

    })


  }


  submit(){
    console.log(this.signup.value);


    // var arr=[];
    // arr.push(this.signup.value)


    this.dataserv.data.push(this.signup.value)


    console.log( this.dataserv.data);


this.router.navigateByUrl('/signin')

  }

}

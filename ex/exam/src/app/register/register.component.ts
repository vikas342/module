import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService){

  }

  registerform!:FormGroup;

  ngOnInit(): void {

    this.registerform= this.fb.group({

    Username:['',[Validators.required]],
     Email:['',[Validators.required,Validators.email]],
       Password:['',[Validators.required,Validators.maxLength(8)]],
      Phoneno:['',[Validators.required,Validators.maxLength(10)]]
    })

  }


  submitform(){

    console.log(this.registerform.value)

    this.auth.register(this.registerform.value).subscribe(x=>{
      console.log(x);
      console.log("register succefully");
    })

  }
}

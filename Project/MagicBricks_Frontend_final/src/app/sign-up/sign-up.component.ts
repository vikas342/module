import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private fb:FormBuilder,private serv:AuthService,private route:Router){

  }
  signup_form!:FormGroup;
  myobj!:Array<object>;
data:any;



  ngOnInit(): void {

    this.signup_form=this.fb.group({


      Name:[''],

      Email:[''],
      Password:['']

    })
  }


  onsubmit(){
    this.data=this.signup_form.value;

    //console.log(this.data);

    this.serv.postdata(this.data)
    .subscribe((data:any)=>{
      console.log(data);


    },
    (error)=>{console.log(error)}
    )
    this.route.navigateByUrl('\login');
  }
}

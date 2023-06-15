import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-formstesting',
  templateUrl: './formstesting.component.html',
  styleUrls: ['./formstesting.component.css']
})
export class FormstestingComponent  implements OnInit{


  users:any[]=[];
loginform!:FormGroup;

  constructor(private fb :FormBuilder){



  }

  ngOnInit(): void {

    this.loginform=this.fb.group({
      email:['',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      pass:['',[Validators.required,Validators.maxLength(2),]]
    })

  }

  submit(){

    // console.log(this.loginform.value);
    this.users.push(this.loginform.value);
    console.log(this.users)
  }
}

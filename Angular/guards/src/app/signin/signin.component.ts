import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from "@angular/forms";
import { CheckService } from '../check.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  constructor(private fb:FormBuilder,private service:CheckService,private rt:Router){

  }
  sigin_form!:FormGroup;
  myobj!:Array<object>;


  ngOnInit(): void {

    this.sigin_form=this.fb.group({

      name:[''],
      password:['']

    })
  }

  onsubmit(){
    console.log(this.sigin_form.value);
    this.service.check(this.sigin_form.value.name,this.sigin_form.value.password);
    this.service.get_userdata(this.sigin_form.value.name);
    this.service.get_posts(this.sigin_form.value.name);
    // this.rt.navigate(['home']);

  }

}

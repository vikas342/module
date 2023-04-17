import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'D4A2';

  student_data!:FormGroup;

  student:any[]=[];


  ngOnInit() {
    this.student_data=new FormGroup({
      Id: new FormControl('',[Validators.required,Validators.maxLength(3)]),
      Full_name:new FormControl('',Validators.required),
      Branch: new FormControl('',Validators.required),
      Address: new FormControl('',Validators.required),

    })

  }
  onsubmit(){
    this.student.push(this.student_data.value)
    console.log(this.student)
  }

  get Id(){
    return this.student_data.get('Id');
  }

  get Full_name(){

    return this.student_data.get("Full_name");

  }

  get Branch(){
    return this.student_data.get("Branch");

  }

  get Address(){
    return this.student_data.get("Address");

  }
}

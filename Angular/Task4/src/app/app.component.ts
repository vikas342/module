import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Task4';


  student_data!:FormGroup;

  student:any[]=[];


  ngOnInit() {
    this.student_data=new FormGroup({
      Id: new FormControl('',[Validators.required,Validators.maxLength(3)]),
      Full_name:new FormControl('',Validators.required),
      Branch: new FormControl('',Validators.required),
      Address: new FormGroup({
        Flat_no: new FormControl('',Validators.required),
        building_name :new FormControl('',Validators.required),
        City :new FormControl('',Validators.required),
        State :new FormControl('',Validators.required)
      }),
      Gender:new FormControl(),
      Skills:new FormArray([
        new FormControl('',[Validators.required])
      ])


    })

  }
  onsubmit(){
    this.student.push(this.student_data.value)
    console.log(this.student)

    this.student_data.reset();
  }

  get Gender(){
    return this.student_data.get('Gender');
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

  get Flat_no(){
    return this.student_data.get("Address.Flat_no");
  }
  get building_name(){
    return this.student_data.get("Address.building_name");

  }  get City(){
    return this.student_data.get("Address.City");

  }  get State(){
    return this.student_data.get("Address.State");

  }


  addskill(){
    (<FormArray>this.student_data.get("Skills")).push(new FormControl('',[Validators.required])) ;
  }

  get Skills(){
    return this.student_data.get('Skills') as FormArray;
  }
}

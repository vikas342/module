import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task4';


  student_data!:FormGroup;

  student:any[]=[];


  ngOnInit() {
    this.student_data=new FormGroup({
      Id: new FormControl('',[Validators.required,Validators.maxLength(3)]),
      Full_name:new FormControl('',Validators.required),
      Branch: new FormControl('',Validators.required),
      Address: new FormGroup({
        Flat_no: new FormControl(),
        building_name :new FormControl(),
        City :new FormControl(),
        State :new FormControl()
      }),
      Gender:new FormControl()

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
}

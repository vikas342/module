import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-stu-form',
  templateUrl: './stu-form.component.html',
  styleUrls: ['./stu-form.component.css']
})
export class StuFormComponent {


  data:any[]=[];

  adddata(){
    this.data.push(this.student_form.value);
    console.log(this.data);
  }

  student_form!:FormGroup;
  constructor(private fb:FormBuilder){
    this.student_form = this.fb.group({

      Id:[''],
      name:[''],
      class:[''],
      email:['']

    })

  }

}

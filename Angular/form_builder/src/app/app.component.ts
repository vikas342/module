import { Component } from '@angular/core';
import { FormBuilder,Validators  } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form_builder';

  arr:any[]=[];
  constructor (private formbuilder:FormBuilder){
  }

   student=this.formbuilder.group({
      id:['',Validators.required],
      name:['',Validators.required],
      gender:['',Validators.required],
      branch:['',Validators.required],

      address:this.formbuilder.group({

        flat_no:['',Validators.required],
        building_name:[,Validators.required],
        city:[Validators.required],
        state:[Validators.required],

      })

    })



  onsubmit(){
this.arr.push(this.student.value)
console.log(this.arr)
  }

}

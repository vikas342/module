import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { student_type } from '../student_interface';
import { SServiceService } from '../s-service.service';


@Component({
  selector: 'app-stu-form',
  templateUrl: './stu-form.component.html',
  styleUrls: ['./stu-form.component.css'],
  providers:[SServiceService]
})
export class StuFormComponent {


  data:Array<student_type>=[];

  deletedata(id:number){
    console.log("d");
    this.st.deldata(id);
  }

  adddata(){
    this.st.datapush(this.student_form.value);
    this.data=this.st.datashow();
    // this.data.push(this.student_form.value);
    console.log(this.data);
  }

  update(obj:student_type,i:number){
this.student_form.patchValue({


  Id:obj.Id,
  name:obj.name,
  class:obj.class,
  email:obj.email

})
this.st.deldata(i);
  }

  student_form!:FormGroup;
  constructor(private fb:FormBuilder,private st:SServiceService){
    this.student_form = this.fb.group({

      Id:[''],
      name:[''],
      class:[''],
      email:['']

    })


  }


}

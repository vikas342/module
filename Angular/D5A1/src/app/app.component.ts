import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validator, Validators } from '@angular/forms';
import { student_data } from 'src/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'D5A1';

  student_data!: FormGroup;
  student: student_data[] = [];
  constructor(){

      this.student_data = new FormGroup({
        Name: new FormGroup({
          First: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
          Middle: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
          Last: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
          DOB: new FormControl('',[Validators.required]),
          Place_of_Birth: new FormControl('',[Validators.required]),
          First_Language: new FormControl('',[Validators.required]),


        }),
        Address: new FormGroup({
          City: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
          State: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
          Country: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
          Pin: new FormControl('',[Validators.required,Validators.maxLength(5)]),
        }),

        Father: new FormGroup({
          FullName: new FormGroup({
            First: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
            Middle: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
            Last: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
          }),
          Email: new FormControl('',[Validators.required,Validators.email]),

          Education: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),

          Phone: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]*$')]),
        }),
        Mother: new FormGroup({
          FullName: new FormGroup({
            First: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
            Middle: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
            Last: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
          }),
          Email: new FormControl('',[Validators.required,Validators.email]),

          Education: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),

          Phone: new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.maxLength(10)]),
        }),
        Emergency_Contact_List: new FormArray([


        ])
      });

  }


  onsubmit(){
    // alert("working")
    this.student.push(this.student_data.value);

    console.log(this.student_data.value)



    this.student_data.reset();
  }

  get Contact_List() {
    return this.student_data.get('Emergency_Contact_List') as FormArray;
  }

  addpersons() {
  this.Contact_List.push(
      new FormGroup({
        pname: new FormControl('',[Validators.required,Validators.pattern('[A-Z][a-z]*')]),
        p_cno: new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')])
      })
    );
    console.log(this.Contact_List)
  }

  get Contact_List_arr(){
    return this.student_data.get('FormGroup[i]')
  }

  get FirstName(){
    return this.student_data.get("Name.First")
  }
  get Name(){
    return this.student_data.get("Name");
  }
  get Address(){
    return this.student_data.get("Address");
  }
  get Father(){
    return this.student_data.get("Father");
  }
  get Father_FullName(){
    return this.student_data.get("Father.FullName");
  }
  get Mother(){
    return this.student_data.get("Mother");
  }
  get Mother_FullName(){
    return this.student_data.get("Mother.FullName");
  }




}

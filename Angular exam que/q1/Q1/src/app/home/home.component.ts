import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Cities, States, datatype, student, users } from '../type';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private serv: ServiceService) {


    this.usertype=serv.usertype;
    console.log(this.usertype)


  }


  usertype:string='';

  studentdata:Array<student>=[];
  studentForm!: FormGroup;

  crede:Array<users>=[]
  cities:Array<Cities>=[];
  states: Array<States> = [];

  data: Array<datatype> = [];

  ngOnInit(): void {


    this.data = this.serv.data;

    this.cities=this.serv.getcitiies();
    this.states=this.serv.states;
    this.crede=this.serv.credentials;

    this.studentForm = new FormGroup({
      Fullname: new FormGroup({
        Firstname: new FormControl('', [Validators.required]),
        Middlename: new FormControl('', [Validators.required]),
        Lastname: new FormControl('', [Validators.required]),
      }),

      Email: new FormControl('', [Validators.required,Validators.email]),



      Address: new FormGroup({
        Building: new FormControl('', [Validators.required]),
        Area: new FormControl('', [Validators.required]),
        State: new FormControl('', [Validators.required]),
        City: new FormControl('', [Validators.required]),
      }),

      Gender: new FormControl('', [Validators.required]),

      // Skills: new FormArray([
      //   new FormControl('', [Validators.required])]),

      skills:new FormControl('', [Validators.required]),

      EducationDetails: new FormGroup({
        Tenth: new FormGroup({
          Marks: new FormControl('', [Validators.required]),
          Grade: new FormControl('', [Validators.required]),
          YearofPassing: new FormControl('', [Validators.required]),
        }),

        Twelth: new FormGroup({
          Marks: new FormControl('', [Validators.required]),
          Grade: new FormControl('', [Validators.required]),
          YearofPassing: new FormControl('', [Validators.required]),
        }),

        Degree: new FormGroup({
          Marks: new FormControl('', [Validators.required]),
          Grade: new FormControl('', [Validators.required]),
          YearofPassing: new FormControl('', [Validators.required]),
        }),
      }),
    });


  }


  submit(){

    console.log("submit is called")
    this.studentdata.push(this.studentForm.value);




    this.serv.studentdata=this.studentdata;
    // console.log("from ser")
    console.log(this.serv.studentdata);


  }

  get Skillsarr(){
    return this.studentForm.get('skills') as FormArray
  }
//   clickme(){
// this.serv.getstate()
//   }


del(id:number){
  this.studentdata.splice(id,1);
}

edit(x:any,id:number){

  this.studentForm.patchValue({
    Fullname:x.Fullname,
    Email:x.Email,
    Gender:x.Gender,
    skills:x.skills,
    Address:x.Address,
    EducationDetails:x.EducationDetails

  })
  this.studentdata.splice(id,1);
  console.log(x.Fullname,x.Email,x.Gender,x.skills,x.Address,x.EducationDetails)
}


get Firstname(){
  return this.studentForm.get('Fullname.Firstname');
}

get Middlename(){
  return this.studentForm.get('Fullname.Middlename');

}

get Lastname(){
  return this.studentForm.get('Fullname.Lastname');

}
get Email(){
  return this.studentForm.get('Email');

}

get Building(){
  return this.studentForm.get('Address.Building');
}
get Area(){
  return this.studentForm.get('Address.Area');
}
get State(){
  return this.studentForm.get('Address.State');
}
get City(){
  return this.studentForm.get('Address.City');
}

get Gender(){
  return this.studentForm.get('Gender');

}


get skills(){
  return this.studentForm.get('skills');

}




get Tenth_Marks(){
  return this.studentForm.get('EducationDetails.Tenth.Marks');

}
get Tenth_Grade(){
  return this.studentForm.get('EducationDetails.Tenth.Grade');

}get Tenth_YearofPassing(){
  return this.studentForm.get('EducationDetails.Tenth.YearofPassing');

}

get Twelth_Marks(){
  return this.studentForm.get('EducationDetails.Twelth.Marks');

}
get Twelth_Grade(){
  return this.studentForm.get('EducationDetails.Twelth.Grade');

}get Twelth_YearofPassing(){
  return this.studentForm.get('EducationDetails.Twelth.YearofPassing');

}

get Degree_Marks(){
  return this.studentForm.get('EducationDetails.Degree.Marks');

}

get Degree_Grade(){
  return this.studentForm.get('EducationDetails.Degree.Grade');

}

get Degree_YearofPassing(){
  return this.studentForm.get('EducationDetails.Degree.YearofPassing');

}

}

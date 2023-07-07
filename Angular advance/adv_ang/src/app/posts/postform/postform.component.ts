import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { QuestionBase } from 'src/app/model/Question';
import { DataService } from 'src/app/services/data.service';
import { FormcontrolsService } from 'src/app/services/formcontrols.service';
import { FormdataService } from 'src/app/services/formdata.service';
import { getallpostssuccess } from 'src/app/store/actions';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent  implements OnInit{

  payload='';
  form!:FormGroup;
  inputdata:QuestionBase<string>[]=[];


  constructor(private formdata:FormdataService,private group :FormcontrolsService,private dataserv:DataService,private store:Store){

    formdata.getcontrollers().subscribe(controls =>{
      this.inputdata= controls;
    })
  }


  ngOnInit(): void {
      this.form=this.group.formgroup(this.inputdata as QuestionBase<string>[]);
  }

  onsubmit(){
    alert()
   this.payload=JSON.stringify(this.form.getRawValue());
    console.log(this.payload)

    this.dataserv.userspost.push(JSON.parse(this.payload))


    this.store.dispatch(getallpostssuccess({posts:JSON.parse(this.payload)}))

    console.log(this.dataserv.userspost);
  }
}

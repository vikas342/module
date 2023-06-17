import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Questionmodel } from '../Models/Questionmodel';
import { FormdataserviceService } from '../services/formdataservice.service';
import { FormreturnserviceService } from '../services/formreturnservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  implements OnInit{

  payload='';
  form!:FormGroup;


  inputdata:Questionmodel<string>[]=[];

// formdatasevice get controls

// form returnservice get that controls and return controls to form group



  constructor(private formdata:FormdataserviceService,private group:FormreturnserviceService){

    formdata.getcontroller().subscribe(control=>{
      this.inputdata=control;
    })

  }


  ngOnInit(): void {

   this.form= this.group.formgroup(this.inputdata  as Questionmodel<string>[])

  }


  onSubmit() {
    this.payload = JSON.stringify(this.form.getRawValue());

  }



}

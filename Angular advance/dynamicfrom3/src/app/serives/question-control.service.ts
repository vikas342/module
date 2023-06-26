import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../model/question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  toFormGroup(question:QuestionBase<string>[]){
    const group:any={};
       
    let arr:FormArray

    question.forEach(question=>{
      
      if(question.controlType=='checkbox'){
        arr=new FormArray([new FormControl()]);
          question.checkboxs?.forEach(chk=>{
            arr.push(new FormControl(chk.checked));
          });
          arr.removeAt(0);
      }
        
      group[question.key]=question.required?new FormControl(question.value||'',Validators.required):(question.controlType=="checkbox") ? arr :new FormControl(question.value||'');
    })
    return new FormGroup(group);
  }
  

  constructor() { }

}

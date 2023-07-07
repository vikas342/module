import { Injectable } from '@angular/core';
import { QuestionBase } from '../model/Question';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormcontrolsService {

  constructor() { }

  formgroup(data:QuestionBase<string>[]){
    const group:any={};
    data.forEach(x=>{
      group[x.key]= new FormControl(x.value || '' ,[Validators.required])
  });
  return new FormGroup(group);


}}

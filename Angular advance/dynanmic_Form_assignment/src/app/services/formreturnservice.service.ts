import { Injectable } from '@angular/core';
import { Questionmodel } from '../Models/Questionmodel';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormreturnserviceService {

  constructor() { }

formgroup(data:Questionmodel<string>[]){

  const group:any={};
  data.forEach(x=>{
    group[x.key]=x.required ? new FormControl(x.value || '' ,[Validators.required]):
    new FormControl(x.value || '');
  });


  return new FormGroup(group);
}

}

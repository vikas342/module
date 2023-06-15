import { Injectable } from '@angular/core';
import { InputGenric } from '../Models/question.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormReturnService {

  constructor() { }

  formGroups(data:InputGenric<string>[]){

    const group:any = {};

    data.forEach(x=>{
      group[x.key] = x.required? new FormControl(x.value||'',[Validators.required]):
      new FormControl(x.value||'');
    });

    return new FormGroup(group);


  }

}

import { Injectable } from '@angular/core';
import { InputGenric } from '../Models/question.model';
import { textArea } from '../Models/text.model';
import { of } from 'rxjs';
import { radio } from '../Models/radio.model';
import { select } from '../Models/select.model';
import { checkbox } from '../Models/checkbox.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  getControlData(){
    const data :InputGenric<string>[]=[
new textArea({
  key:'firstname',
  label:'First Name',
  order:1
}),
new textArea({
  key:'middlename',
  label:'middlename',
  order:2
}),
new textArea({
  key:'lastname',
  label:'lastname',
  order:3
}),
new radio({
  key: 'sex',
        label: 'Sex',
        type: 'radio',
        options: [
          {key: 'Male',  value: 'm'},
          {key: 'Female',  value: 'f'}
        ],
        required: true,
        order: 4
})
,
new select({
  key: 'cities',
        label: 'cities',
        type: 'select',
        options: [
          {key: 'mumbai',  value: 'mumbai'},
          {key: 'pune',  value: 'pune'}
        ],
        required: true,
        order: 5
})
,
new checkbox({
  key: 'Hobbies',
        label: 'Hobbies',
        type: 'checkbox',
        options: [
          {key: 'sleeping',  value: 'sleeping'},
          {key: 'coding',  value: 'coding'}
        ],
        required: true,
        order: 6
})


    ];

    return of(data.sort((a,b)=> a.order-b.order))
  }
}

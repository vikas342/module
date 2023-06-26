import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CheckBoxQuestion } from '../model/CheckBoxQuestion';
import { DropdownQuestion } from '../model/DropdownQuestion';
import { QuestionBase } from '../model/question-base';
import { RadioQuestion } from '../model/RadioQuestion';
import { TextareaQuestion } from '../model/TextareaQuestion';
import { TextboxQuestion } from '../model/TextboxQuestion';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(){
    const questions:QuestionBase<string>[]=[

      new TextboxQuestion({
        key:'Name',
        label:'Name',
        required: true,
        order: 1,
        type:'textbox'
      }),

      new DropdownQuestion({
        key:'City',
        label:'City',
        required:true,
        order:3,
        options:[
          {key:"rajkot",value:"Rajkot"},
          {key:"ahemdabad",value:"Ahmedabad"},
          {key:"gandhinagar",value:"Gandhinagar"},
          {key:"gandhinagar",value:"Jamnagar"},
          {key:"surat",value:"Surat"}
        ]
      }),
      

      new TextareaQuestion({
        type:'textarea',
        key:'Address',
        label:'Address',
        value:'',
        order:2,
      }),

      new CheckBoxQuestion({
        key:'Hobbies',
        label:'Hobbies',
        order:4,
        type:'checkbox',
        checkboxs:[{key:'read',value:'Read',checked:false},
          {key:'write',value:'Write',checked:false},
          {key:'sing',value:'Sing',checked:false},
          {key:'dance',value:'Dance',checked:false}
        ]
      }),
      
      new RadioQuestion({
        key:'gender',
        label:'Gender',
        type:'radio',
        order:5,
        checkboxs:[{key:'male',value:'Male',checked:false},
                 {key:'female',value:'Female',checked:false}]
      })


    ];
    
    return of(questions.sort((a,b)=>a.order-b.order));
    
  }

}



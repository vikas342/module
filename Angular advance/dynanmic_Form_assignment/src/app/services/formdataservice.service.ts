import { Injectable } from '@angular/core';
import { Questionmodel } from '../Models/Questionmodel';
import { SelectQuestion,  } from '../Models/selectmodel';
import { RadioQuestion } from '../Models/radiomodel';
import { CheckboxQuestion } from '../Models/checkboxmodel';
import { of } from 'rxjs';
import { TextboxQuestion } from '../Models/textmodel';

@Injectable({
  providedIn: 'root'
})
export class FormdataserviceService {

  constructor() { }


  //this will be use for which type of form you want like login/signup



  getcontroller(){
    const data:Questionmodel<string>[]=[
      new TextboxQuestion({
        key:'fullname',
        label:'fullname',
        order:1
      }),
      new TextboxQuestion({
        key:'email',
        label:'email',
        order:2
      }),

      new RadioQuestion({
        key:"gender",
        label:"gender",
        type:"radio",
        options:[
          {
            key:"male",
            value:"male"
          },
          {
            key:"female",
            value:"female"
          }
        ],
        required:true,
        order:3
      }),


      new CheckboxQuestion({
        key:"hobies",
        label:"hobies",
        type:"checkbox",
        options:[
          {
            key:"cricket",
            value:"cricket"
          },
          {
            key:"hockey",
            value:"hockey"
          }
        ],
        required:true,
        order:4
      }),

      new SelectQuestion({
        key:"city",
        label:"city",
        options:[{
          key:"mumbai",
          value:"mumbai"
        },

        {
          key:"ahmedabad",
          value:"ahmedabad"
        }

      ],
      required:true,
      order:5

      })

    ];
    return of(data.sort((a,b)=>a.order-b.order));
  }
}

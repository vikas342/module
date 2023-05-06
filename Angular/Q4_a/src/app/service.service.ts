import { Injectable } from '@angular/core';
import { questions } from './type';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }


  questions:questions[]=[
   {
    id:1,
    question:"What is the capital of India?",
    options:['Mumbai','Delhi','Pune','Ahmedabad'],
    ans:'Delhi'

   },
   {
    id:2,
    question:"What is India's national bird?",
    options:['Sparrow','Peacock','Piegon','Egale'],
    ans:'Peacock'

   },
  ]
}

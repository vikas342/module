import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
  arr:number[]=[1,2,3,4,5]

  myfunc(){
    console.log(this.arr)
      }

}

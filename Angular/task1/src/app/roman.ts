import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'Roman'})
export class Roman implements PipeTransform {
  transform(num: number): string {
   
let arr = {
    "10 ": "X",
    "9 ": "IX",
    "5 ": "V",
    "4 ": "IV",
    "1 ": "I"
};

let str = "";


for (const key in arr) {
    // const value = arr[key];
    let y = parseInt(key); 
    let x = num/y;
    if(x > 0)
    {
        for(let i = 0; i < x; i++)
        {
            // str += value;
        }
    }
    num = num % y;
}

    return str;


  }
}
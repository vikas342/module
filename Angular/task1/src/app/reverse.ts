import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'reverse'})
export class reverse implements PipeTransform {
  transform(str: string): string {
    let str1:string=str;
    let  str2='';
    for(let i=str1.length-1;i>=0;i--){
        str2=str2+str1[i];

    }
    return str2;


  }
}
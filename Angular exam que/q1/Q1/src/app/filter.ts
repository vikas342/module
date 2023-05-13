import { Pipe, PipeTransform } from '@angular/core';
import { student } from './type';

@Pipe({
  name: 'filter'
})

export class filterPipe implements PipeTransform {
  transform(data: Array<student>): any {

    let x:Array<student>=data.sort((a:any, b:any) => {
      return (a.Fullanme.Firstname > b.Fullanme.Firstname) ? 1 : ((b.Fullanme.Firstname > a.Fullanme.Firstname) ? -1 : 0);
    })

    console.log(x)
    return x;


  }
}

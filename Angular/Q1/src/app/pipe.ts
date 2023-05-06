import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seatings'
})

export class seatingPipe implements PipeTransform {
  transform(start: number,end: number,): any {

    let seating:number[]=[];
    for (let i=start;i<=end;i++){
      seating.push(i);
    }
return seating;
  }
}

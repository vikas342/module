import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cube'
})

export class cubePipe implements PipeTransform {
    transform(num:number): number {

        let ans=Math.pow(num,3)

        return ans
        
    }
}
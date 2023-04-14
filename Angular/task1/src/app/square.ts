import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'square'
})

export class square implements PipeTransform {
    transform(num:number): number {

        let ans=Math.pow(num,2);


        return ans;
        
    }
}

import { user } from './newfile';
console.log('-----------export demo----------');
let obj1 = new user<number, string>(1, 'vikas sonwane');
let obj2 = new user<number, string>(2, 'vinit shah');

let userdata: Array<user<number, string>> = [obj1, obj2];
console.log(userdata)

for (let i of userdata){
  console.log(`name is:${i.name} and id is:${i.id}`)
}